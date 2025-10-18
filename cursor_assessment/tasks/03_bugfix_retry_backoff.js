
async function retryWithBackoffBuggy(fn, retries) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 50));
      }
    }
  }
  throw lastErr;
}
module.exports = { retryWithBackoffBuggy };
