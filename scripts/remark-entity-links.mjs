import fs from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';

const registryPath = path.resolve('src/data/entities.json');
const registry = fs.existsSync(registryPath)
  ? JSON.parse(fs.readFileSync(registryPath, 'utf8'))
  : [];

const aliases = [];
for (const entity of registry) {
  for (const label of [entity.name, ...(entity.aliases || [])]) {
    aliases.push({ label, url: entity.url, id: entity.id });
  }
}
aliases.sort((a, b) => b.label.length - a.label.length);

function escapeRegExp(value) {
  return value.replace(/[.*+?^$()|[\]\\{}]/g, '\\$&');
}

export default function remarkEntityLinks() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index === undefined) return;
      if (['link', 'linkReference', 'code', 'inlineCode'].includes(parent.type)) return;

      const value = node.value;
      const matches = [];

      for (const entity of aliases) {
        const pattern = new RegExp(`\\b${escapeRegExp(entity.label)}\\b`, 'gi');
        let match;
        while ((match = pattern.exec(value))) {
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0],
            url: entity.url,
            id: entity.id
          });
        }
      }

      if (!matches.length) return;

      matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
      const selected = [];
      let cursor = -1;
      for (const match of matches) {
        if (match.start >= cursor) {
          selected.push(match);
          cursor = match.end;
        }
      }

      const children = [];
      let position = 0;
      for (const match of selected) {
        if (match.start > position) {
          children.push({ type: 'text', value: value.slice(position, match.start) });
        }
        children.push({
          type: 'link',
          url: match.url,
          data: {
            hProperties: {
              className: ['entity-link'],
              'data-entity-id': match.id
            }
          },
          children: [{ type: 'text', value: match.text }]
        });
        position = match.end;
      }

      if (position < value.length) {
        children.push({ type: 'text', value: value.slice(position) });
      }

      parent.children.splice(index, 1, ...children);
      return index + children.length;
    });
  };
}
