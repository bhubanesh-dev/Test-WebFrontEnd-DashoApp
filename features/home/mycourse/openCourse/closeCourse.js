import { Builder, By, until } from "selenium-webdriver";

export default async function closeCourse(driver) {
  describe("close a specific course ", function () {
    this.timeout(30000);

    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it('should close the course and goto home', async function () {
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/header/div[1]/button[1]")),1000).click();
        
    })
  });
}
