function sanitizeFilenameBuggy(name) {
  if (typeof name !== 'string') return '';
  let sanitized = name.replace(/\s+/g, '_');
  sanitized = sanitized.replace(/[^\p{L}\p{N}_\-\.]/gu, '');
  sanitized = sanitized.replace(/_+/g, '_');
  sanitized = sanitized.replace(/([^_])_+\./g, '$1.');
  return sanitized;
}

module.exports = { sanitizeFilenameBuggy };