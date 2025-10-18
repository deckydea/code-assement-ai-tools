/**
 *
 * @param {string} aqs URI Query string
 */
function parseQuery(aqs) {
  const queries = aqs.split("&").filter(Boolean);

  const parsed = {};

  for (const q of queries) {
    if (q === "") continue;
    const [key, value = ""] = q.split("=");
    if (!key) continue;

    // generated
    parsed[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return parsed;
}
module.exports = { parseQuery };
