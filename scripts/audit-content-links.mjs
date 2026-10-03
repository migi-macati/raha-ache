import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.resolve('src/content');
const collections = ['characters','places','events','objects','technologies','practices','ideas','sources','books','chapters','research'];
const referenceKeys = ['related','sources','timeline','characters','places','chapters','events','objects','technologies','practices','ideas'];
const allowedChapterBooks = new Set(['book-1','book-2','book-3','zz-bonus']);
const entities = [];
const byId = new Map();
const duplicates = [];
const metadataIssues = [];

const nonEmpty = (value) => typeof value === 'string' && value.trim().length > 0;

for (const collection of collections) {
  const dir = path.join(root, collection);
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith('.md'))) {
    const full = path.join(dir, String(file));
    const source = fs.readFileSync(full, 'utf8');
    const { data } = matter(source);
    if (!data.id || !data.name) {
      metadataIssues.push({ path: path.relative(process.cwd(), full), issue: 'missing id or name' });
      continue;
    }

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
      refs: [...new Set(refs.map(String))],
      data
    };

    if (!data.status) {
      metadataIssues.push({ path: entity.path, issue: 'missing status' });
    }

    if (collection === 'events') {
      if (!data.certainty) metadataIssues.push({ path: entity.path, issue: 'event missing certainty' });
      if (!nonEmpty(data.date)) metadataIssues.push({ path: entity.path, issue: 'event missing date' });
      if (typeof data.dateSort !== 'number') metadataIssues.push({ path: entity.path, issue: 'event missing dateSort' });
    }

    if (collection === 'sources') {
      if (!nonEmpty(data.author)) metadataIssues.push({ path: entity.path, issue: 'source missing author' });
      if (!nonEmpty(data.year)) metadataIssues.push({ path: entity.path, issue: 'source missing year' });
      if (!data.sourceType) metadataIssues.push({ path: entity.path, issue: 'source missing sourceType' });
      if (!nonEmpty(data.citation)) metadataIssues.push({ path: entity.path, issue: 'source missing citation' });
    }

    if (collection === 'chapters') {
      if (!allowedChapterBooks.has(String(data.book))) {
        metadataIssues.push({ path: entity.path, issue: `invalid chapter book key: ${data.book}` });
      }
      if (typeof data.chapterNumber !== 'number') {
        metadataIssues.push({ path: entity.path, issue: 'chapter missing chapterNumber' });
      }
      if (!data.draftStatus) {
        metadataIssues.push({ path: entity.path, issue: 'chapter missing draftStatus' });
      }
    }

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
const currentBooks = entities
  .filter((entity) => entity.collection === 'books' && entity.data.developmentStatus === 'current')
  .map((entity) => entity.id)
  .sort();
const expectedCurrentBooks = ['book-1','book-2','book-3'];
if (JSON.stringify(currentBooks) !== JSON.stringify(expectedCurrentBooks)) {
  metadataIssues.push({
    path: 'src/content/books',
    issue: `current book set is ${currentBooks.join(', ') || '(none)'}; expected ${expectedCurrentBooks.join(', ')}`
  });
}

console.log(`Content audit: ${entities.length} entities`);
console.log(`Duplicate IDs: ${duplicates.length}`);
console.log(`Broken references: ${broken.length}`);
console.log(`Semantic orphans: ${orphans.length}`);
console.log(`Metadata issues: ${metadataIssues.length}`);

for (const [first, second, id] of duplicates) {
  console.error(`DUPLICATE ${id}: ${first} | ${second}`);
}
for (const item of broken) {
  console.error(`BROKEN ${item.from} -> ${item.target} (${item.path})`);
}
for (const entity of orphans) {
  console.error(`ORPHAN ${entity.id} (${entity.collection}) ${entity.path}`);
}
for (const item of metadataIssues) {
  console.error(`METADATA ${item.path}: ${item.issue}`);
}

if (duplicates.length || broken.length || orphans.length || metadataIssues.length) {
  process.exitCode = 1;
}
