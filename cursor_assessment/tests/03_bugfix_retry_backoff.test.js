const assert = require('assert');
const { retryWithBackoffBuggy } = require('../tasks/03_bugfix_retry_backoff');
let tries = 0;
const succeedOn3 = async () => {
  tries++;
  if (tries < 3) throw new Error('fail');
  return 'ok';
};
(async () => {
  const t0 = Date.now();
  const res = await retryWithBackoffBuggy(succeedOn3, 3);
  const dt = Date.now() - t0;
  assert.strictEqual(res, 'ok');
  // Harus menunggu ~100 + 200 sebelum percobaan ke-3 berhasil
  assert.ok(dt >= 250, `elapsed too short: ${dt}`);

  let caught = false;
  try {
    await retryWithBackoffBuggy(async()=>{ throw new Error('x'); }, 2);
  } catch (e) { caught = true; }
  assert.ok(caught);

  console.log('✅ cursor: bugfix_retry_backoff');
})().catch(e=>{ throw e; });
