import assert from "assert";
import { By, until } from "selenium-webdriver";

export default async function deleteVideo(driver) {
  describe("delete a video", function ()  {

    this.timeout(30000);
    before(async () => {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should delete a video", async () => {
      // click on the video delete buttton on the video card
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[1]/div[2]/button"
            )
          ),
          10000
        )
        .click();
      // click on the video delete conformation button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[1]/div[2]/div[2]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();

    });
    after(async function () {
        await driver.sleep(1000);
        const elements = await driver.findElements(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[1]/div[2]/div/div[1]/b"
            )
          );
          assert.strictEqual(elements.length, 0); // Assert that no such elements are found
          
    })
  });
}
