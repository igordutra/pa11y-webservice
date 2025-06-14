const puppeteer = require('puppeteer');

(async () => {
  const path = puppeteer.executablePath();
  console.log('✅ Chrome executable path is:\n', path);
})();