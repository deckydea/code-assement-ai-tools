function deepMerge(a, b) {
  // Buat objek hasil baru
  const result = { ...a };
  
  // Iterasi melalui properti di objek b
  for (const key in b) {
    // Jika properti ada di kedua objek dan keduanya adalah objek biasa
    if (key in a && 
        typeof a[key] === 'object' && a[key] !== null && 
        typeof b[key] === 'object' && b[key] !== null &&
        !Array.isArray(a[key]) && !Array.isArray(b[key])) {
      // Gabungkan objek secara rekursif
      result[key] = deepMerge(a[key], b[key]);
    } else {
      // Gunakan nilai dari b jika bukan objek atau hanya ada di b
      result[key] = b[key];
    }
  }
  
  return result;
}

module.exports = { deepMerge };
