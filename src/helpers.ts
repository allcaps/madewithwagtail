export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const normalizedBase = base.startsWith('/') ? base.slice(base.length) : base;
  return `${normalizedBase}${normalizedPath}`;
}

// URL slug for a facet value, e.g. 'professional services' -> 'professional-services',
// '3D' -> '3d'. Inverse of the facet page's display lookup.
export function facetSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
