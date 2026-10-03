import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.resolve('src/content');
const collections = ['characters','places','events','sources','books','chapters','research'];
const referenceKeys = ['related','sources','timeline','characters','places','chapters','events'];
const entities = [];
const byId = new Map();
const duplicates = [];

for (const collection of collections) {
  const dir = path.join(root, collection);
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith('.md'))) {
    const full = path.join(dir, String(file));
    const source = fs.readFileSync(full, 'utf8');
    const { data } = matter(source);
    if (!data.id || !data.name) continue;

    const refs = [];
    for (const key of referenceKeys) {
      if (Array.isArray(data[key])) refs.push(...data[key]);
    }
    if (Array.isArray(data.relations)) {
      refs.push(...data.relations.map((relation) => relation?.target).filter(Boolean));
    }
    const entity = {
      id: String(data.id),
      name: String(data.name),
      collection,
      path: path.relative(process.cwd(), full),
      refs: [...new Set(refs.map(String))]
    };

    if (byId.has(entity.id)) {
      duplicates.push([byId.get(entity.id).path, entity.path, entity.id]);
    } else {
      byId.set(entity.id, entity);
    }
    entities.push(entity);
  }
}

const incoming = new Map(entities.map((entity) => [entity.id, []]));
const broken = [];

for (const entity of entities) {
  for (const ref of entity.refs) {
    if (!byId.has(ref)) {
      broken.push({ from: entity.id, path: entity.path, target: ref });
      continue;
    }
    if (ref !== entity.id) incoming.get(ref).push(entity.id);
  }
}

const orphans = entities.filter((entity) => (incoming.get(entity.id) || []).length === 0);

console.log(`Link audit: ${entities.length} entities`);
console.log(`Duplicate IDs: ${duplicates.length}`);
console.log(`Broken references: ${broken.length}`);
console.log(`Semantic orphans: ${orphans.length}`);

for (const [first, second, id] of duplicates) {
  console.error(`DUPLICATE ${id}: ${first} | ${second}`);
}
for (const item of broken) {
  console.error(`BROKEN ${item.from} -> ${item.target} (${item.path})`);
}
for (const entity of orphans) {
  console.warn(`ORPHAN ${entity.id} (${entity.collection}) ${entity.path}`);
}

if (duplicates.length || broken.length) process.exitCode = 1;
