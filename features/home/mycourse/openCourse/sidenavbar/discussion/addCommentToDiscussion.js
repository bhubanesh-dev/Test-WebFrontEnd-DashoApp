import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addCommentToDiscussion(driver) {
  describe("add a comment in discussion ", function () {
    this.timeout(50000); // Increased timeout to 50 seconds

    before(function () {
      if (!driver) throw new Error("driver not set");
    });

    it("should add a comment in a discussion", async function () {
      // Sleep for a short while to ensure the page has time to load
      await driver.sleep(2000);

      // Click on add comment button
      const addCommentButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div/button"
          )
        ),
        10000
      );
      await addCommentButton.click();

      // Wait for the comment text area to appear
      const commentTextArea = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div[2]/form/div[1]/textarea"
          )
        ),
        10000
      );
      await driver.sleep(3000);
      await commentTextArea.sendKeys(
        "writing any comment in a discussion after edit the discussion"
      );
      await driver.sleep(2000);
      // Click on the submit button for the comment
      const submitButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div[2]/form/div[2]/button"
          )
        ),
        10000
      );
      await submitButton.click();
    });
  });
}
