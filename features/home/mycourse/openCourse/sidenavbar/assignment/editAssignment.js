import webdriver from "selenium-webdriver";
import { Builder, By, until } from "selenium-webdriver";
import assert from "assert";

export default function editAssignment(driver) {
  describe("edit  Assignment ", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should edit Assignment", async function () {
      await driver.sleep(2000);
      const threeDotAssignmentsButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div"
          )
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(threeDotAssignmentsButton), 10000);
      await threeDotAssignmentsButton.click();
      await driver.sleep(2000);
      //   click on the edit button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div/div/div/div[1]"
            )
          ),
          10000
        )
        .click();
      // fill the form
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              " /html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[7]/form/div[3]/div/input"
            )
          ),
          10000
        )
        .sendKeys("any assignment title after edit ");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[7]/form/div[4]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("25/09/2024");

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[7]/form/div[5]/div/textarea"
            )
          ),
          10000
        )
        .sendKeys("any assignment description in edit form");
      await driver.sleep(5000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[7]/form/div[8]/button"
            )
          ),
          10000
        )
        .click();
        await driver.sleep(2000);
    });
  });
}
