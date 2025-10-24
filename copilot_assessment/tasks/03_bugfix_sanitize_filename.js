function sanitizeFilenameBuggy(name) {
  // Clean, robust filename sanitizer
  // Rules implemented:
  // - Normalize Unicode to NFC to avoid encoding surprises
  // - Collapse one-or-more whitespace characters into a single '_'
  // - Allow only ASCII letters, digits, underscore, dash and dot
  // - Remove all other characters
  // - Compress multiple consecutive '_' into a single '_'
  // - Remove underscores immediately before a dot unless the filename starts with '_.' (keep leading '_.txt')

  if (typeof name !== "string") return "";

  // Normalize unicode to NFC form to avoid encoding differences
  let out = name.normalize ? name.normalize("NFC") : name;

  // Replace any run of whitespace with a single underscore
  out = out.replace(/\s+/g, "_");

  // Remove disallowed characters: keep letters, numbers, underscore, dash and dot
  out = out.replace(/[^A-Za-z0-9_\-.]/g, "");

  // Collapse multiple underscores into one
  out = out.replace(/_+/g, "_");

  // Remove underscore immediately before a dot unless underscore is the very first character
  // Example: 'file_ .txt' -> 'file.txt', but '_.hidden' stays '_.hidden'
  out = out.replace(/([^_]|^)_+\./g, (m, p1) => `${p1}.`);

  return out;
}
module.exports = { sanitizeFilenameBuggy };
