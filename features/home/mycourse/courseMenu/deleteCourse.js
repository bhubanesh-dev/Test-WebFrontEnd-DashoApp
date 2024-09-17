import { By, until } from "selenium-webdriver";

import assert from "assert";
export default async function deleteCourse(driver) {
  if (!driver) {
    throw new Error("Driver setup problem"); // Ensure driver is initialized
  }
  describe("delete course name from course menu", function () {
    this.timeout(30000); // Increase the timeout for the test

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("should delete the course having name   'sample test with edit name ' from the course menu and it will not showing at first ....", async function () {
      // Click on the 3dot button on a course
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]"
            )
          ),
          10000
        )
        .click();
      // click on the delete option
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]/div/div/button[3]"
            )
          ),
          10000
        )
        .click();

      // click on confirm button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]/div/div/div/div/div/button[2]"
          )
        )
        .click();

      await driver.sleep(1000);
    });

  });
}
