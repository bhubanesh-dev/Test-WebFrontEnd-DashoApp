import { Builder, By, until } from "selenium-webdriver";

export default async function (driver) {
  describe("visit the course summary", function () {
    this.timeout(30000);

    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it('should open card details and and perform other functions', async function () {  
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div/div[1]/div/div/div[1]/div/button")),1000).click();
        
    })
  });
}
