import { By, until } from "selenium-webdriver";

export default async function openNoticeTab(driver) {
  describe("open Notice class tab", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should open notice tab in home page interface", async function () {
      const noticeButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div[4]/button"
          )
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(noticeButton), 10000);
      await noticeButton.click();
    });
  });
}
