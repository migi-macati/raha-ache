import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const bad = [];
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

if (!fs.existsSync(dist)) {
  console.error('Built-link audit: dist directory missing');
  process.exit(1);
}

walk(dist);

const malformedBase = /(?:href|src)="\/raha-ache(?!\/|")/g;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const matches = html.match(malformedBase);
  if (matches) bad.push({ file: path.relative(process.cwd(), file), count: matches.length });
}

const required = [
  'index.html',
  'characters/index.html',
  'characters/ache/index.html',
  'books/book-1/index.html',
  'chapters/bonus-spanish-contact/index.html',
  'feedback/index.html'
];
const missing = required.filter((file) => !fs.existsSync(path.join(dist, file)));

console.log(`Built-link audit: ${htmlFiles.length} HTML files`);
console.log(`Malformed base-path links: ${bad.reduce((sum, item) => sum + item.count, 0)}`);
console.log(`Missing representative pages: ${missing.length}`);

for (const item of bad) console.error(`BAD BASE PATH ${item.file}: ${item.count}`);
for (const file of missing) console.error(`MISSING PAGE ${file}`);

if (bad.length || missing.length) process.exitCode = 1;
