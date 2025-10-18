function sanitizeFilenameBuggy(name) {
  // First, preserve spaces around dots
  let preservedName = name.replace(/\s+\./g, ".");

  return preservedName
    .replace(/\s+/g, "_") // Replace one or more spaces with a single underscore
    .replace(/[^a-zA-Z0-9_\-\.]/g, "") // Remove non-alphanumeric characters except underscore, dash, and dot
    .replace(/_+/g, "_"); // Compress multiple underscores into one
}
module.exports = { sanitizeFilenameBuggy };
