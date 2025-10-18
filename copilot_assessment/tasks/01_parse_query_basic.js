function parseQuery(aqs) {
  // Return empty object if input is falsy or empty
  if (!aqs) return {};

  const result = {};

  // Remove leading '?' if present
  const queryString = aqs.startsWith("?") ? aqs.substring(1) : aqs;

  // Split the query string by '&' to get key-value pairs
  const pairs = queryString.split("&");

  for (let pair of pairs) {
    // Skip empty entries
    if (!pair) continue;

    // Split each pair by '=' to separate key and value
    const [key, value] = pair.split("=").map((part, index) => {
      // Replace '+' with spaces first, then decode
      const decoded = part ? part.replace(/\+/g, " ") : "";

      try {
        // Only decode if there's content to decode
        return decoded ? decodeURIComponent(decoded) : "";
      } catch (e) {
        // If decoding fails, return the original string
        return decoded;
      }
    });

    // Skip entries with empty keys
    if (!key) continue;

    // Set value (or empty string if value is undefined)
    result[key] = value !== undefined ? value : "";
  }

  return result;
}

module.exports = { parseQuery };
