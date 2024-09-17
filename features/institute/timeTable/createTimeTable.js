import { By, until } from "selenium-webdriver";

export default async function createTimeTable(driver) {
  describe("create a time table in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should create the timetable ", async function () {
      await driver.sleep(1000);
      //click on add create time table button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/button"
            )
          ),
          10000
        )
        .click();
      // fill the from
      await driver.sleep(200);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[2]/div[1]/input"
            )
          ),
          10000
        )
        .sendKeys("time table for science batch");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[2]/div[3]/input"
            )
          ),
          10000
        )
        .sendKeys("D:\\dashoTest\\assests\\notes.png");
      const checkbox = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[2]/div[5]/div[1]/input"
          )
        ),
        10000
      );
      // Wait up to 10 seconds

      // Click the checkbox to select it
      await checkbox.click();
      // click on save
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[3]/button"
          )
        ),
        10000
      ).click();

      //
    });
  });
}
