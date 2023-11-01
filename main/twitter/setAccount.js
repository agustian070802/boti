const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");
const fs = require('fs');

(async function example() {
    const dirTwitter = 'C:/Users/Win 10/Desktop/nodeBot/driver/Profile/twitter'
    var chrome = require("selenium-webdriver/chrome");
    var options = new chrome.Options();
    var profilePath = 'C:/Users/Win 10/Desktop/nodeBot/driver/Profile/twitter/profile '
    const numberProfile = fs.readdirSync(dirTwitter).length
    console.log(numberProfile)
    const profiles = numberProfile + 1

    const userData = `user-data-dir=${ profilePath + profiles }`
    // console.log(getComment[i])
    console.log(userData)
        
    options.addArguments(userData)
    console.log(userData)
    
    let driver = await new Builder().withCapabilities(options).build();
    await driver.get('https://x.com/irwan_mard85785/status/1719564666995904775');
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.navigate().refresh()
    // await driver.findElement(By.xpath('(//textarea[@placeholder="Add a comment…"])[1]')).sendKeys(getComment[i], Key.RETURN);
    
    
    
    await driver.sleep(180000)
    await driver.quit();
    


})(); 
