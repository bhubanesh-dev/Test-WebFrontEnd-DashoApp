import webdriver from "selenium-webdriver";
import { Builder, By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteAssignment(driver) {
  describe("deletes  Assignment ", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }9
    });

    it("should delete Assignment", async function () {
      await driver.sleep(2000);
      //   click on 3 dot
      const threeDotAssignmentsButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div"
          )
        ),
        10000
      );
      await driver.wait(
        until.elementIsVisible(threeDotAssignmentsButton),
        10000
      );
      await threeDotAssignmentsButton.click();
      await driver.sleep(2000);
      //   click on the delete button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div/div/div/div[2]"
            )
          ),
          10000
        )
        .click();
        await driver.sleep(3000);
      //   click on confirm button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[7]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
