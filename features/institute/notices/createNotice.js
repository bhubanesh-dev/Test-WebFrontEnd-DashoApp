import { By, until } from "selenium-webdriver";

export default async function createNotice(driver) {
  describe("create notices in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should create the notice ", async function () {
      await driver.sleep(1000);
      //click on create notice button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/button"
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
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/form/div[2]/div[2]/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("any notice title");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/form/div[2]/div[3]/div[2]/textarea"
            )
          ),
          10000
        )
        .sendKeys("any notice description");
      const checkbox = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/form/div[2]/div[4]/div/div/input"
          )
        ),
        10000
      );
      // Wait up to 10 seconds

      // Click the checkbox to select it
      await checkbox.click();
      // click on save
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/form/div[2]/div[5]/button"
          )
        ),
        10000
      ).click();

      //
    });
  });
}
