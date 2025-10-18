function sanitizeFilenameBuggy(name) {
  // BUGGY VERSION:
  return name
    .replace(/\s/g, '_')
    .replace(/[^a-zA-Z0-9_\-\.]/g, '') // ok
    .replace(/__+/g, '__');
}
module.exports = { sanitizeFilenameBuggy };
