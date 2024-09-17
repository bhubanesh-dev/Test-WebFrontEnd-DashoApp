import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function editDiscussion(driver) {
  describe("open a discussion and edit ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) throw new Error("driver not set");
    });
    it("should open a discussion and edit the discussion", async function () {

      await driver.sleep(2000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[1]/div[2]/div[2]/button/div[2]/div[1]"
            )
          ),
          1000
        )
        .click();
      // click on edit button
      await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/div[2]/div/div/div[2]/div/button")
          ),
          1000
        )
        .click();

      // trigger the status field and changed it to closed
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/input"
            )
          ),
          1000
        )
        .sendKeys("any discussion with edit");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/form/div[3]/div[3]/div[2]/div[2]/select"
            )
          ),
          1000
        )
        .sendKeys("closed");
      // click on submit
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/form/div[3]/div[5]/button"
          )
        )
        .click();
    });
  });
}
