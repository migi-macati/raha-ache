import { getCollection } from 'astro:content';
import { withBase } from './base';

export const collectionNames = ['characters','places','events','sources','books','chapters','research'] as const;
export type CollectionName = typeof collectionNames[number];

export async function getEverything() {
  const groups = await Promise.all([
    getCollection('characters'),
    getCollection('places'),
    getCollection('events'),
    getCollection('sources'),
    getCollection('books'),
    getCollection('chapters'),
    getCollection('research')
  ]);

  return collectionNames.flatMap((collection, index) =>
    groups[index].map((item) => ({ collection, item }))
  );
}

export async function entityIndex() {
  const all = await getEverything();
  return new Map(all.map(({ collection, item }) => [
    item.data.id,
    {
      id: item.data.id,
      name: item.data.name,
      collection,
      url: withBase(`${collection}/${item.data.id}/`)
    }
  ]));
}

export function referencedIds(data: Record<string, unknown>) {
  const keys = ['related','sources','timeline','characters','places','chapters','events'];
  const flat = keys.flatMap((key) => Array.isArray(data[key]) ? data[key] as string[] : []);
  const relationTargets = Array.isArray(data.relations)
    ? (data.relations as Array<{ target?: string }>).map((relation) => relation.target).filter(Boolean) as string[]
    : [];
  return [...new Set([...flat, ...relationTargets])];
}
