import { By, until } from "selenium-webdriver";
import { Select } from "selenium-webdriver/lib/select.js"; // Import Select from the correct path
import assert from "assert";
export default async function editCourse(driver) {
  if (!driver) {
    throw new Error("Driver setup problem"); // Ensure driver is initialized
  }
  describe("edit course name from course menu", function () {
    this.timeout(30000); // Increase the timeout for the test

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("should change the course name from 'sample test' to 'sample test with edit name ' from the course menu", async function () {
      // Click on the 3dot button on a course
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]"
            )
          ),
          10000
        )
        .click();
      // click on the edit option
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[2]/div/div/button[1]"
            )
          ),
          10000
        )
        .click();

      // Fill the course form
      // Name of the course
      await driver.sleep(1000);
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[3]/div/div[2]/input"
          )
        )
        .clear(); // Clear the input field before sending new keys
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[3]/div/div[2]/input"
          )
        )
        .sendKeys("sample test with edit name from course menu");

      // Select Class from dropdown
      const selectClass = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[4]/div[1]/div[2]/select"
          )
        ),
        10000 // Wait for up to 10 seconds
      );
      const classSelect = new Select(selectClass);
      await classSelect.selectByVisibleText("Class-12");

      await driver.sleep(1000); // Optional wait between interactions

      // Select Board from dropdown
      const selectBoard = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[4]/div[2]/div[2]/select"
          )
        ),
        10000
      );
      const boardSelect = new Select(selectBoard);
      await boardSelect.selectByVisibleText("ICSE");

      await driver.sleep(1000); // Optional wait between interactions

      // Select Subject from dropdown
      const selectSubject = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[4]/div[3]/div[2]/select"
          )
        ),
        10000
      );
      const subjectSelected = new Select(selectSubject);
      await subjectSelected.selectByVisibleText("Physics");
// save button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/form/div[6]/button"
          )
        )
        .click();

      await driver.sleep(1000);
    });

    // after(async function () {
    //   const element = await driver.wait(
    //     until.elementLocated(
    //       By.xpath(
    //         "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div/div[1]/button"
    //       )
    //     ),
    //     10000
    //   );
    //   const courseName = await element.getText();
    //   assert.strictEqual(courseName, "sample test with edit name from course menu");
    // });
  });
}
