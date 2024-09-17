import { By, until } from "selenium-webdriver";

export default async function selectBatchToViewTimeTable(driver) {
  describe("view a time table in institute", function () {
    this.timeout(30000);

    before(function () {
      if (!driver) {
        throw new Error("driver not set up");
      }
    });

    it("should display the timetable", async function () {
      await driver.sleep(1000);

      // Locate the dropdown
      const dropdown = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[2]/select"
          )
        ),
        10000
      );

      // Click the dropdown
      await dropdown.click();

      // Send keys to the dropdown
      await dropdown.sendKeys("science");
      await dropdown.click();
    });
  });
}
