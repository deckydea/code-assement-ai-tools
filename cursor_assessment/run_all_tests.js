// Minimal CommonJS test runner
const fs = require('fs');
const path = require('path');
const testsDir = path.join(__dirname, 'tests');
const files = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js')).sort();
let passed = 0, failed = 0;
for (const f of files) {
  try {
    require(path.join(testsDir, f));
    passed++;
  } catch (e) {
    console.error('❌', f);
    console.error(e && e.stack || e);
    failed++;
  }
}
console.log(`\nSummary: ${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
