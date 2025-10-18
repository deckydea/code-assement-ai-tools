function slugify(s) {
  if (s == null) return "";

  // trim
  let out = String(s).trim();

  // normalize accents/diacritics when possible and strip combining marks
  if (typeof out.normalize === "function") {
    out = out.normalize("NFKD");
  }
  out = out.replace(/[\u0300-\u036f]/g, "");

  // lowercase
  out = out.toLowerCase();

  // replace any whitespace runs with a single hyphen
  out = out.replace(/\s+/g, "-");

  // filter: allow only lowercase letters, digits, underscore and hyphen
  out = out.replace(/[^a-z0-9_-]+/g, "");

  // compress multiple hyphens
  out = out.replace(/-+/g, "-");

  // remove leading/trailing hyphens
  out = out.replace(/^-+|-+$/g, "");

  return out;
}
module.exports = { slugify };
