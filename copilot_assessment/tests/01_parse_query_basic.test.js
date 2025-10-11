const assert = require('assert');
const { parseQuery } = require('../tasks/01_parse_query_basic');
assert.deepStrictEqual(parseQuery(''), {});
assert.deepStrictEqual(parseQuery('a=1&b=hello%20world'), { a:'1', b:'hello world' });
assert.deepStrictEqual(parseQuery('flag'), { flag:'' });
assert.deepStrictEqual(parseQuery('a=1&&&b=2'), { a:'1', b:'2' });
assert.deepStrictEqual(parseQuery('=x&k='), { k:'' });
console.log('✅ copilot: parse_query_basic');
