import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.resolve('src/content');
const out = path.resolve('src/data/entities.json');
const collections = ['characters','places','events','sources','books','chapters','research'];
const entities = [];

for (const collection of collections) {
  const dir = path.join(root, collection);
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith('.md'))) {
    const full = path.join(dir, String(file));
    const { data } = matter(fs.readFileSync(full, 'utf8'));
    if (!data.id || !data.name) continue;

    entities.push({
      id: data.id,
      name: data.name,
      aliases: data.aliases || [],
      collection,
      url: `/raha-ache/${collection}/${data.id}/`
    });
  }
}

entities.sort((a, b) => b.name.length - a.name.length);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(entities, null, 2));
console.log(`Entity registry: ${entities.length} entities`);
