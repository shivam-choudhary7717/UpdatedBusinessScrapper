const puppeteer = require('puppeteer');
const magicPinScrapper = require('./magicPin');
require('dotenv').config();


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const [page] = await browser.pages();
    await page.setViewport({ width: 1280, height: 926 });
    

    if (process.env.NAME === 'magicpin') {
        await page.goto(
            `https://magicpin.in/india/New-Delhi/home`
        );
        await magicPinScrapper(page);
    }
    else if (process.env.NAME === 'swiggy') {
        await page.goto(
            `https://www.swiggy.com`
        );
    }
    else if (process.env.NAME === 'zomato') {
        await page.goto(
            `https://www.zomato.com`
        );
    }
    
    // await browser.close();
})();