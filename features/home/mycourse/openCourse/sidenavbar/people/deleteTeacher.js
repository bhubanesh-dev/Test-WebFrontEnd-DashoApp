import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteTeacher(driver) {
  describe("delete a teacher in people", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should delete a teacher", async function () {
      // click on delete teacher
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div/div[1]/button"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div/div[1]/div[3]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
