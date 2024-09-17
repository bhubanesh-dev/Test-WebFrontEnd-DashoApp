import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteLinks(driver) {
  describe("delete a link from course summary in link", function () {
    this.timeout(20000);

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("should delete the link ", async function (params) {
      // click on delete buttton
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/ol/div/div/li/div[1]/div[2]/button[1]"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(4000);
      // click on confirm button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/ol/div/div/li/div[1]/div[2]/div/div/div/button[2]"
          )
        )
        .clcik();
    });
    // after(async function (params) {
    //   driver.wait(
    //     until.elementLocated(
    //       By.xpath(
    //         "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]"
    //       )
    //     )
    //   );
    //   const noteTitle = await element.getText();
    //   assert.notStrictEqual(noteTitle, "any file for notes", "not success");
    // });
  });
}
