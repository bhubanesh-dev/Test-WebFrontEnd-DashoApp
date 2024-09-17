import { By, until } from "selenium-webdriver";
import { Select } from "selenium-webdriver/lib/select.js"; // Import Select from the correct path
import assert from 'assert';
export default async function editCourseInSummary(driver)  {
  if (!driver) {
    throw new Error("Driver setup problem"); // Ensure driver is initialized
  }
  describe("edit course name in open course summary", function () {
    this.timeout(30000); // Increase the timeout for the test

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("should change the course name from 'sample test' to 'sample test with edit name'", async function () {
      // Click on the edit button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/button"
            )
          ),
          10000
        )
        .click(); // Fixed the typo from `clcik` to `click`

      // Fill the course form
      // Name of the course
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[4]/div[1]/div/div[2]/input"
          )
        )
        .clear(); // Clear the input field before sending new keys
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[4]/div[1]/div/div[2]/input"
          )
        )
        .sendKeys("sample test with edit name");

      // Select Class from dropdown
      const selectClass = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[4]/div[2]/div[1]/div[2]/select"
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
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[4]/div[2]/div[2]/div[2]/select"
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
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[4]/div[2]/div[3]/div[2]/select"
          )
        ),
        10000
      );
      const subjectSelected = new Select(selectSubject);
      await subjectSelected.selectByVisibleText("Physics");

      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/div[1]/div[2]/div/div/form/div[5]/button"
          )
        )
        .click();

      await driver.sleep(1000);
    });

    after(async function () {
      const element =await  driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div[3]"
          )
        ),
        10000
      );
      const courseName =await element.getText();
      assert.strictEqual(courseName, "SAMPLE TEST WITH EDIT NAME");
    });
  });
};
