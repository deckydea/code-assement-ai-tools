const assert = require('assert');
const { sanitizeFilenameBuggy } = require('../tasks/03_bugfix_sanitize_filename');

const out1 = sanitizeFilenameBuggy('my  file!!.txt');
const out2 = sanitizeFilenameBuggy('report   2025?.pdf');
const out3 = sanitizeFilenameBuggy('weird__   name .md');

assert.strictEqual(out1, 'my_file.txt');
assert.strictEqual(out2, 'report_2025.pdf');
assert.strictEqual(out3, 'weird_name.md');

console.log('✅ copilot: bugfix_sanitize_filename');
