const assert = require('assert');
const { slugify } = require('../tasks/01_slugify_display_name');
assert.strictEqual(slugify('  Project Alpha  '), 'project-alpha');
assert.strictEqual(slugify('Design_System v2'), 'design_system-v2');
assert.strictEqual(slugify('--- Many   Spaces ---'), 'many-spaces');
console.log('✅ cursor: slugify_display_name');
