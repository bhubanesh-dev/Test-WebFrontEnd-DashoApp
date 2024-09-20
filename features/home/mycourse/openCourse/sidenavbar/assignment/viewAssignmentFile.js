import { By, until } from "selenium-webdriver";

export default async function viewAssignmentFile(driver) {
  describe("open Assignment File in a diffrent tab ", function () {
    this.timeout(7000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should view the assignment file (questions ) in diffrent tab by clicking on view file", async function () {
      await driver.sleep(100);
      // Store the current tab (window handle)
      const originalWindow = await driver.getWindowHandle();
      const viewTimeTableButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div/div/div[4]/table/tbody/tr/td[3]/button"
          )
        ),
        10000
      );
      await driver.sleep(1000);
      await viewTimeTableButton.click();

      // Wait until the new tab is opened
      await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        6000
      );
      await driver.sleep(2000);
      // Get all window handles
      const allWindows = await driver.getAllWindowHandles();

      // Switch to the new tab (the new window handle will not be the original one)
      const newTab = allWindows.find((handle) => handle !== originalWindow);
      await driver.switchTo().window(newTab);
      await driver.sleep(3000);

      // Verify the new tab's URL
      const newTabUrl = await driver.getCurrentUrl();
      // replace with expected URL
      if (newTabUrl) await driver.close();
      // Close the new tab

      // Switch back to the original window
      await driver.switchTo().window(originalWindow);
    });
  });
}
