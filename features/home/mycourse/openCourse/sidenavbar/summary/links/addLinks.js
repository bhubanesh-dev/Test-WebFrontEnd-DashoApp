import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addLinks(driver) {
  describe("adding a link in open course in course summary", function () {
    this.timeout(50000);

    before(function () {
      if (!driver) {
        throw new Error("driver not set ");
      }
    });

    it("should add a note in course summary", async function () {
      await driver.sleep(1000);
      // click on the link tab
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div/div[4]/button"
            )
          ),
          10000
        )
        .click();

      // click on the add a link
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/div/button"
            )
          ),
          10000
        )
        .click();
      // fill the form details of adding a file
      // enter file title
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/form/div[3]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("any link for course link");

      // add link
      await driver
      .wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/form/div[4]/div/div[2]/input"
          )
        ),
        10000
      )
      .sendKeys("any hyper link for course link");

      // enter description
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/form/div[5]/div/div[2]/textarea"
            )
          ),
          10000
        )
        .sendKeys("any file description ");

      // click on the save link button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/form/div[6]/button"
          )
        )
        .click();
    });
    after(async function () {
      await driver.sleep(1000);
      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/ol/div/div/li/div[1]/div[1]/button"
          )
        ),10000
      );
      const noteTitle = await element.getText();

      assert.strictEqual(noteTitle, "any link for course link");
    });
  });
}
