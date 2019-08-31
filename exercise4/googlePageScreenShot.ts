import * as puppeteer from 'puppeteer';

 const googlePageScreenShot = async(q: string) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.focus('input[name="q"]');
    await page.keyboard.type(q);
    await page.keyboard.press("Enter");
    let bkWMgd = '.r:first-child a';
    await page.waitForSelector('#search');
    const links = await page.evaluate(bkWMgd => {
      const anchors = Array.from(document.querySelectorAll(bkWMgd));
      return anchors.map(anchor => {
        return `${anchor.href}`;
      });
    }, bkWMgd);
    await page.goto(links[0]);
    await page.setViewport({"width":1920,"height":1080});
    await page.screenshot({path: 'results.png'});

    await browser.close();  
  } catch (error) {  
    throw error;
  }
};
export default googlePageScreenShot;