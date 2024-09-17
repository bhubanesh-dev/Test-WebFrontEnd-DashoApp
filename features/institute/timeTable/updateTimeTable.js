import { By, until } from "selenium-webdriver";

export default async function updateTimeTable(driver) {
  describe("update a time table in institute ", function () {
    this.timeout(20000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should update the timetable ", async function () {
      await driver.sleep(1000);
      //click on update time table button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/button"
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
        .sendKeys("-edited");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[2]/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("D:\\dashoTest\\assests\\project_template.png");
      await driver.sleep(200);
    //   const checkbox = await driver.wait(
    //     until.elementLocated(
    //       By.xpath(
    //         "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[2]/div[3]/div[1]/input"
    //       )
    //     ),
    //     10000
    //   );
    //   // Wait up to 10 seconds

    //   // Click the checkbox to select it
    //   await checkbox.click();
      // click on update
      await driver.sleep(100);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/form/div[2]/div[3]/button"
            )
          ),
          10000
        )
        .click();

      //
    });
  });
}
