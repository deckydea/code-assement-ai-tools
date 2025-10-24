function parseQuery(aqs) {
  const result = {};
  if (!aqs || typeof aqs !== 'string') return result;

  // Remove leading '?' if present
  const query = aqs.startsWith('?') ? aqs.slice(1) : aqs;

  // Split by '&'
  const pairs = query.split('&');
  for (const pair of pairs) {
    if (!pair) continue; // Ignore empty entries
    const [rawKey, rawValue] = pair.split('=');

    if (!rawKey) continue; // Ignore if key is missing

    // Replace '+' with space, then decode
    const key = decodeURIComponent(rawKey.replace(/\+/g, ' '));
    let value = '';
    if (typeof rawValue !== 'undefined') {
      value = decodeURIComponent(rawValue.replace(/\+/g, ' '));
    }
    // Ensure both key and value are strings
    result[String(key)] = String(value);
  }
  return result;
}
module.exports = { parseQuery };