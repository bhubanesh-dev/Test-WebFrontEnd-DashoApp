import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addStudentInCourseMenu(driver, name) {
  describe("add a student from course menu", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should add a student ", async function () {
      // click on add student 
      await driver.sleep(2000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div[2]/div[2]/button[2]"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(1000);
      // search name to add
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div[3]/div/div[3]/input"
            )
          ),
          10000
        )
        .sendKeys(name);
      //  click on add button
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div[3]/div/div[4]/div[2]/button"
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
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div[3]/div/div[1]/div"
            )
          ),
          10000
        )
        .click();
    });
  });
}
