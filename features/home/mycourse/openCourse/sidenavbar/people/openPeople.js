import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function (driver) {
  describe("open people dashborad", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should open people dashboard", async function () {
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/div[1]/button[6]")
          ),
          10000
        )
        .click();
    });
  });
}
