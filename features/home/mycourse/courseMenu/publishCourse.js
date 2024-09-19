import { By, until } from "selenium-webdriver";

import assert from "assert";
export default async function deleteCourse(driver) {
  if (!driver) {
    throw new Error("Driver setup problem"); // Ensure driver is initialized
  }
  describe("publish course from course menu", function () {
    this.timeout(30000); // Increase the timeout for the test

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("should publish the course from the course menu", async function () {
      // Click on the 3dot button on a course
      driver.sleep(2000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div[1]/div/div/div[2]"
            )
          ),
          10000
        )
        .click();
      // click on publish
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]/div/div/button[4]"
            )
          ),
          10000
        )
        .click();

      // // check published or not 
      // await driver
      //   .wait(
      //     until.elementLocated(
      //       By.xpath(
      //         "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]"
      //       )
      //     ),
      //     10000
      //   )
      //   .click();
      //   await driver.sleep(6000);
      // const element =await driver
      //   .findElement(
      //     By.xpath(
      //       "/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div[1]/div/div/div[2]/div/div/button[4]"
      //     )
      //   );
      //   const elementText = await element.getText();

      //   assert.strictEqual(elementText,'Unpublish', 'publish success');
      await driver.sleep(4000);
       // Click on the 3dot button on a course
       driver.sleep(2000);
       await driver
         .wait(
           until.elementLocated(
             By.xpath(
               "/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div[1]/div/div/div[2]"
             )
           ),
           10000
         )
         .click();
       // click on publish
       await driver.sleep(1000);
       await driver
         .wait(
           until.elementLocated(
             By.xpath(
               "/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div[1]/div/div/div[2]/div/div/button[4]"
             )
           ),
           10000
         )
         .click();

    });
    // after( async function (params) {
    //     await driver
    //     .wait(
    //       until.elementLocated(
    //         By.xpath(
    //           "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]"
    //         )
    //       ),
    //       10000
    //     )
    //     .click();
    //   // click on Unpublish
    //   await driver.sleep(1000);
    //   await driver
    //     .wait(
    //       until.elementLocated(
    //         By.xpath(
    //           "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]/div/div/button[4]"
    //         )
    //       ),
    //       10000
    //     )
    //     .click();
    //     await driver.sleep(1000);
    // });

  });
}
