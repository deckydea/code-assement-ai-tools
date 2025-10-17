const assert = require('assert');
const { topoSort } = require('../tasks/02_toposort_modules');

// Basic
assert.deepStrictEqual(topoSort([['a','c'],['b','c']]).join(','), 'a,b,c');

// Jebakan: duplikasi edge & stabilitas leksikografis di pilihan awal
assert.deepStrictEqual(topoSort([['core','ui'],['core','api'],['core','ui'],['api','app'],['ui','app']]).join(','), 'core,api,ui,app');

// Cycle
assert.throws(()=> topoSort([['a','b'],['b','a']]), /CYCLE/);

// Jebakan: chain panjang & node singleton
assert.deepStrictEqual(topoSort([['a','b'],['b','c'],['c','d']]).join(','), 'a,b,c,d');

console.log('✅ cursor: toposort_modules');
