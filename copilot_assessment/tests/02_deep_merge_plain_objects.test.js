const assert = require('assert');
const { deepMerge } = require('../tasks/02_deep_merge_plain_objects');
const a = { x:1, y:{ z:2, k:3 } };
const b = { y:{ z:9 }, w:5 };
const out = deepMerge(a, b);
assert.deepStrictEqual(out, { x:1, y:{ z:9, k:3 }, w:5 });
assert.deepStrictEqual(a, { x:1, y:{ z:2, k:3 } });
console.log('✅ copilot: deep_merge_plain_objects');
