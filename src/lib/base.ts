export const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path = '') {
  const clean = String(path).replace(/^\/+/, '');
  return clean ? `${basePath}/${clean}` : `${basePath}/`;
}
