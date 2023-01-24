const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const [page] = await browser.pages();
    await page.setViewport({ width: 1280, height: 926 });
    await page.goto(
        `https://www.zomato.com`
    );
    // await browser.close();
})();