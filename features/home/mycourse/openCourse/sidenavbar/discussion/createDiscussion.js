import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function createDiscussion(driver) {
  describe("create discussion", function () {
    this.timeout(60000); // Extend timeout to 60 seconds for the whole test suite

    before(async function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should a create discussion form", async function () {
      await driver.sleep(1500);
      // Wait until the button to open the form is located
      const createButton = await driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/button")
        ),
        20000 // 20-second wait time for locating the element
      );

      // Wait until the element is visible
      await driver.wait(until.elementIsVisible(createButton), 10000);

      // Click the button
      await createButton.click();

      // fill the form
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[3]/div[2]/input')),10000).sendKeys("any discussion");
      await driver.sleep(1000);
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[4]/div[1]/div[2]/select')),10000).sendKeys("Default");
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[4]/div[2]/div[2]/select')),10000).sendKeys("High");
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[4]/div[3]/div[2]/select')),10000).sendKeys("Public");
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[5]/div[2]/textarea')),10000).sendKeys("Any description for create  a discussion");

      // submit / create button
      await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/div/div/div[1]/div[1]/div/form/div/div[6]/button')).click();
      
    
    });
  });
}
