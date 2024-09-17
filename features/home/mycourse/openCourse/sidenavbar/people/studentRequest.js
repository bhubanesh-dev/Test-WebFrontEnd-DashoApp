import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function studentRequest(driver) {
  describe("accept a student request", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should accept a student request", async function () {
      // click on request tab
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[7]/div[1]/div[2]/button[2]"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(1000);
      const approveElement = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div/div[7]/div[2]/div/div/div/div[3]/button[1]"
          )
        ),
        10000
      );
      if (approveElement) {
        await approveElement.click();
      }

    //   
      await driver.sleep(3000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[7]/div[1]/div[2]/button[1]"
            )
          ),
          10000
        )
        .click();
        await driver.sleep(2000);
    });

  });
}
