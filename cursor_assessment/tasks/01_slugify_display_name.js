function slugify(s) {
  if (s === undefined || s === null) {
    return '';
  }

  const normalized = String(s).toLowerCase().trim();
  if (!normalized) {
    return '';
  }

  const withHyphens = normalized.replace(/\s+/g, '-');
  const filtered = withHyphens.replace(/[^a-z0-9_-]/g, '');
  const compressed = filtered.replace(/-+/g, '-');

  return compressed.replace(/^-+|-+$/g, '');
}
module.exports = { slugify };
