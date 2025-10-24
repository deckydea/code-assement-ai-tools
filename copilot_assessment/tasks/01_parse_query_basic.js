function parseQuery(aqs) {
  // Return empty object for falsy or empty input
  if (!aqs) return {};

  const result = {};

  // Split on '&' to get individual key=value (or key) segments
  // Multiple consecutive '&' will produce empty strings which we ignore below
  const parts = aqs.split("&");

  for (let part of parts) {
    if (!part) continue; // ignore empty segments

    // According to x-www-form-urlencoded, '+' represents space
    // Replace '+' with ' ' before decoding
    part = part.replace(/\+/g, " ");

    // Find first '=' to split key and value. If none, it's a key with empty value
    const idx = part.indexOf("=");
    let rawKey, rawVal;
    if (idx === -1) {
      rawKey = part;
      rawVal = "";
    } else {
      rawKey = part.slice(0, idx);
      rawVal = part.slice(idx + 1);
    }

    // Ignore entries with empty key (e.g., '=value' or '=') per requirements
    if (rawKey === "") continue;

    // Decode percent-encoding. decodeURIComponent may throw for malformed sequences;
    // wrap in try/catch and treat decode failures by using raw (decoded minimally)
    let key, val;
    try {
      key = decodeURIComponent(rawKey);
    } catch (e) {
      // Fallback: replace percent-escapes conservatively
      key = rawKey.replace(/%([0-9A-Fa-f]{2})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      );
    }

    try {
      val = decodeURIComponent(rawVal);
    } catch (e) {
      val = rawVal.replace(/%([0-9A-Fa-f]{2})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      );
    }

    // Ensure both key and val are strings (they will be), and last duplicate wins
    result[String(key)] = String(val);
  }

  return result;
}
module.exports = { parseQuery };
