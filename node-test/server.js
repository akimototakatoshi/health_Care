import fs from 'fs/promises';
import Module from 'module';

const require = module.createRequire(import.meta.url);
const pModule = 'I:/NodeModule/puppeteer@12.0.1/node_modules/puppeteer';
const puppeteer = require(pModule);

(async () => {
    const url = 'https://fooddb.mext.go.jp/freeword/fword_select.pl';
                //食品カロリー

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const arrayLinks = Array.from(document.querySelectorAll('a'))
          .filter(element => element.href.match())
          .filter(element => element.textContent !== '')
          .map(element =>{
            const obj = {
                text: element.textContent,
                url: element.href
            };
            return obj;
        });
        return arrayLinks;
          });
          
          const pathLinks = 'output/links.txt';
          const textlinks = JSON.stringify(arrayLinks, null, '¥t');
          await fs.writeFile(pathLinks, textlinks, 'utf8');


          
