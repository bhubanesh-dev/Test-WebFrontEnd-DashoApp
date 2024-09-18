
import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addVideo(driver) {
  describe("add videos to the course in the course summary section", function () {
    this.timeout(60000); // Increase the timeout to 60 seconds to avoid premature test failure

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should add a video to the course", async function () {
      // Click on video tab
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div/div[2]/button"
            )
          ),
          20000 // Increased timeout for each wait to handle slow loading
        )
        .click();

      // Click on add a video
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/button"
            )
          ),
          20000
        )
        .click();

      // Click on add a YouTube video
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/button"
            )
          ),
          20000
        )
        .click();
        await driver.sleep(1000);

      // Fill in the video title
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/form/div[3]/div/div[2]/input"
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
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/form/div[4]/div/div[2]/input"
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
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/form/div[5]/div/div[2]/textarea"
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
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/form/div[6]/button"
            )
          ),
          20000
        )
        .click();
        await driver.sleep(3000);
    });

    after(async function () {
      // Check whether the video card is created
      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[1]/div[2]/div/div[1]/b"
          )
        ),
        20000
      );
      const videoTitle = await element.getText();
      assert.strictEqual(videoTitle, "anything is the title");
      await driver.sleep(10000);
    });
  });
};
