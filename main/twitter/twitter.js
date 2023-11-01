const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");
const fs = require("fs");

(async function example() {
  const dirTwiter = "../../driver/Profile/twitter";
  var chrome = require("selenium-webdriver/chrome");
  var options = new chrome.Options();
  const profilePath =
    "C:/Users/Win 10/Desktop/nodeBot/driver/Profile/twitter/profile ";
  const numberProfile = fs.readdirSync(dirTwiter).length;
  console.log(numberProfile);
  const comments = "../../data/comments.txt";
  const resultComments = "../../data/resultComments.txt"
  const targetComments = "../../data/targetComments.txt"
  const mainUrl = "https://www.x.com/login";

  for (let i = 0; i < numberProfile; i++) {
    const userData = `user-data-dir=${profilePath}${i + 1}`;
    var getComment = fs.readFileSync(comments, "utf8").split("\n");
    var getTargetComments = fs.readFileSync(targetComments, "utf8").split("\n");
    console.log(getComment);
    console.log(getTargetComments[i]);
    console.log(userData);

    options.addArguments(userData);
    console.log(userData);

    let driver = await new Builder().withCapabilities(options).build();
    await driver.get(mainUrl);
    await driver.get(
      getTargetComments[i]
    );
    await driver.navigate().refresh();
    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver
      .findElement(By.xpath('//div[@data-contents="true"]'))
      .sendKeys(getComment[i], Key.RETURN);
    await driver
      .findElement(By.xpath('//div[@data-testid="tweetButtonInline"]'))
      .click();
    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver
      .findElement(By.xpath('(//article[@role="article"])[2]'))
      .click();
    const urlComment = await driver.getCurrentUrl();
    console.log(urlComment);
    fs.open(resultComments, "a", (err, fd)=>{ 
      if(err){ 
          console.log(err.message); 
      }else{ 
          fs.write(fd, urlComment+"\r\n", (err, bytes)=>{ 
              if(err){ 
                  console.log(err.message); 
              }else{ 
                  console.log(bytes +' bytes written'); 
              } 
          })
      } 
  }) 

  await driver.sleep(10000);
  await driver.quit();
  }
})();
