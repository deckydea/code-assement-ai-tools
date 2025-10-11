const assert = require('assert');
const { mergeSettings } = require('../tasks/02_merge_settings_whitelist');
const d = { theme:'light', pageSize:20, tips:true };
const u = { pageSize:50, unknown:'x' };
const out = mergeSettings(d, u);
assert.deepStrictEqual(out, { theme:'light', pageSize:50, tips:true });
assert.deepStrictEqual(d, { theme:'light', pageSize:20, tips:true });
console.log('✅ cursor: merge_settings_whitelist');
