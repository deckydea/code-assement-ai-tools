function parseQuery(aqs) {
  // Return empty object for empty string
  if (!aqs) {
    return {};
  }

  const result = {};
  
  // Split by '&' to get individual key-value pairs
  const pairs = aqs.split('&');
  
  for (const pair of pairs) {
    // Skip empty entries (e.g., from '&&&')
    if (!pair) {
      continue;
    }
    
    // Split by '=' to separate key and value
    const equalIndex = pair.indexOf('=');
    
    let key, value;
    
    if (equalIndex === -1) {
      // No '=' means it's a flag, value is empty string
      key = pair;
      value = '';
    } else {
      key = pair.substring(0, equalIndex);
      value = pair.substring(equalIndex + 1);
    }
    
    // Skip if key is empty (e.g., '=x')
    if (!key) {
      continue;
    }
    
    // Replace '+' with space for both key and value
    key = key.replace(/\+/g, ' ');
    value = value.replace(/\+/g, ' ');
    
    // Decode URI components
    try {
      key = decodeURIComponent(key);
      value = decodeURIComponent(value);
    } catch (e) {
      // If decoding fails, use as-is
    }
    
    // Store in result (last value wins if key repeats)
    result[key] = value;
  }
  
  return result;
}
module.exports = { parseQuery };
