function slugify(s) {
  // Handle null, undefined, or non-string inputs
  if (!s || typeof s !== 'string') {
    return '';
  }

  return s
    // Step 1: Trim whitespace from both ends
    .trim()
    
    // Step 2: Convert to lowercase for consistency
    .toLowerCase()
    
    // Step 3: Replace whitespace (spaces, tabs, newlines) with hyphens
    .replace(/\s+/g, '-')
    
    // Step 4: Remove or replace special characters, keep alphanumeric, hyphens, and underscores
    .replace(/[^\w\-_]+/g, '')
    
    // Step 5: Replace multiple consecutive hyphens with single hyphen
    .replace(/\-+/g, '-')
    
    // Step 6: Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
