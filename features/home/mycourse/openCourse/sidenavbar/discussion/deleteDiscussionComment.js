import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteDiscussionComment(driver) {
  describe("delete a comment in discussion", function () {
    this.timeout(50000); // Increased timeout to 50 seconds

    before(function () {
      if (!driver) throw new Error("driver not set");
    });

    it("should delete a comment in a discussion", async function () {
      await driver.sleep(1000); // Initial delay to ensure the page is loaded

      // Click on the delete button for a comment
      const clickOnMenu = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div[1]/div[2]/button"
          )
        ),
        10000
      );
      await clickOnMenu.click();

      // Wait for the confirmation delete button to appear
      await driver.sleep(1000); // Additional sleep to wait for any transitions/animations
      const clickOnDeleteButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div[1]/div[2]/div/button[2]"
          )
        ),
        10000
      );
      await clickOnDeleteButton.click();
    });
  });
}
