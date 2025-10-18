function sanitizeFilenameBuggy(name) {
  // FIXED VERSION:
  return name
    .replace(/\s+/g, '_')                      // Replace one or more spaces with single underscore
    .replace(/[^a-zA-Z0-9_\-\.]/g, '')         // Remove invalid characters (keep letters, numbers, _, -, .)
    .replace(/_+/g, '_')                       // Compress multiple underscores into one
    .replace(/_+\./g, '.');                    // Remove underscores before dots
}
module.exports = { sanitizeFilenameBuggy };
