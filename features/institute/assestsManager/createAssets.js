import { By, until } from "selenium-webdriver";

export default async function createAssets(driver) {
  describe("create a assets in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should create a assets ", async function () {
      await driver.sleep(1000);
      //click on add create assets button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div/button"
            )
          ),
          10000
        )
        .click();
      // fill the from
      await driver.sleep(200);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/form/div[1]/div/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("laptop");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/form/div[2]/div[1]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("16");
      const selectElement = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/form/div[2]/div[2]/div/div[2]/select"
          )
        ),
        10000
      );
      // Wait up to 10 seconds

      // Click the checkbox to select it
      await selectElement.sendKeys("Available");
      // click on save
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/form/div[3]/button"
          )
        ),
        10000
      ).click();

      //
    });
  });
}
