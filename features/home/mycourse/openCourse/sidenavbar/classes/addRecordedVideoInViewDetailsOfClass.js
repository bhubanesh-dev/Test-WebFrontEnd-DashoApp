import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addRecordedVideoInViewDetailsOfClass(driver) {
  describe("add video to the view details of vlass", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should add a video", async function () {
      // Wait for the button element to be located
      await driver.sleep(1000);
      const Button = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[7]/div/div[1]/div/button"
          )
        ),
        10000 // Wait up to 20 seconds to locate the element
      );

      // Ensure the button is visible and clickable
      await driver.wait(until.elementIsVisible(Button), 10000);

      // Click the button to open the discussion dashboard
      await Button.click();

      // Fill in the video title
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[3]/div[2]/input"
            )
          ),
          20000
        )
        .sendKeys("anything is the title");

      // Fill in the video URL
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[4]/div[2]/input"
            )
          ),
          20000
        )
        .sendKeys("https://www.youtube.com/watch?v=VjOGCBEZBUQ");

      // Fill in the video description
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[5]/div[2]/textarea"
            )
          ),
          20000
        )
        .sendKeys("This is a sample video description.");

      // Submit the form (click on save)
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[6]/button"
            )
          ),
          20000
        )
        .click();
    });
  });
}
