import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function logout(driver) {
  describe("close the app with logout", function () {
    this.timeout(30000);

    before(async function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should do logout process", async function () {
      await driver.sleep(1000);
      // const user = await driver.wait(
      //   until.elementLocated(
      //     By.xpath("/html/body/div/div/div/header/div[3]/div[4]/button/i")
      //   ),
      //   10000
      // );
      // const userName = await user.getText();
      // assert.strictEqual(userName, "Root");
     
      await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/header/div[3]/div[4]/button")
          ),

          10000
        )
        .click();

      await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/header/div[3]/div[4]/div/div/i[5]")
          ),
          10000
        )
        .click();

      await driver.sleep(1000);

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/header/div[3]/div[4]/div/div/div/div/div/button[2]"
            )
          ),
          10000
        )
        .click();
    });

    after(async function () {
      try {
        await driver.get('https://dashoapp.com');
        await driver.sleep(5000);
        // Adjust the XPath and timeout as needed
        const check = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div[1]/div[1]/div/div[2]/input"
            )
          ),
          10000
        );
        const isVisible = await check.isDisplayed();
        if (isVisible) {
          await driver.quit();
        } else {
          throw new Error("Logout process failed: element is not visible");
        }
      } catch (error) {
        console.error("Error in after hook:", error);
        await driver.quit();
        throw error;
      }
    });
  });
}
