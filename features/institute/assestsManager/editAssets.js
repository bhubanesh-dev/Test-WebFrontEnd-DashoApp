import { By, until } from "selenium-webdriver";

export default async function editAssets(driver) {
  describe("edit a assets in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should edit a assets ", async function () {
      await driver.sleep(1000);
      //click on edit assets button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div[1]/div[6]"
            )
          ),
          10000
        )
        .click();
      // fill the from
      await driver.sleep(200);

      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[8]/div/form/div[1]/div[2]/input"
          )
        ),
        10000
      );
      await element.clear();
      await element.sendKeys("26");
      const selectElement = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[8]/div/form/div[2]/select"
          )
        ),
        10000
      );
      // Wait up to 10 seconds

      // Click the checkbox to select it
      await selectElement.sendKeys("retired");
      // click on save
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[8]/div/form/div[3]/button"
            )
          ),
          10000
        )
        .click();
    });
  });
}
