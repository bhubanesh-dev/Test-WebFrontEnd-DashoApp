

import { By, until } from "selenium-webdriver";

export default async function deleteAssets(driver) {
  describe("delete a assets in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not setup");
      }
    });

    it("should delete a assets ", async function () {
      await driver.sleep(2000);
      //click on delete assets button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div[1]/div[7]"
            )
          ),
          10000
        )
        .click();
      // click on confirm
      await driver.sleep(200);

      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[8]/div/div[2]/button[1]"
          )
        ),
        10000
      );
      await element.click();
      
    });
  });
}
