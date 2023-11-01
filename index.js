const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");
const fs = require('fs');

(async function example() {
    const dirIg = 'C:/Users/Win 10/Desktop/nodeBot/driver/Profile/instagram'
    var chrome = require("selenium-webdriver/chrome");
    var options = new chrome.Options();
    var profilePath = 'C:/Users/Win 10/Desktop/nodeBot/driver/Profile/instagram/profile '
    const numberProfile = fs.readdirSync(dirIg).length
    console.log(numberProfile)
    const filePath = './test/asd.txt';

    for (let i = 0; i < numberProfile + 1; i++) {
        const userData = `user-data-dir=${profilePath}${i}`
        var getComment = fs.readFileSync(filePath, 'utf8').split('\n');
        // console.log(getComment[i])
        console.log(userData)
        
        options.addArguments(userData)
        console.log(userData)
    
        let driver = await new Builder().withCapabilities(options).build();
        await driver.get('https://www.instagram.com/p/CzEA4XNvrnD/');
        await driver.manage().setTimeouts({ implicit: 5000 });
        // await driver.findElement(By.xpath('(//textarea[@placeholder="Add a comment…"])[1]')).sendKeys(getComment[i], Key.RETURN);
    
    
        await driver.sleep(5000)
        await driver.quit();
        
      }
    


})(); 
