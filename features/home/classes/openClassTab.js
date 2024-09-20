import { By, until } from "selenium-webdriver";

export default async function openClassTab(driver) {
  describe("open class tab", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should open  class tab in home page interface", async function () {
      const classesButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div[2]/button"
          )
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(classesButton), 10000);
      await classesButton.click();
    });
  });
}
