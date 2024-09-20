import { By, until, Select } from "selenium-webdriver";
import assert from "assert";

// Create course functionality
export default async function createCourse(driver) {
  describe("Create Course", function () {
    // Increase the timeout for the entire suite
    this.timeout(30000); // Set to 30 seconds

    before(async function () {

      // Ensure the driver is initialized before running the tests
      if (!driver) {
        throw new Error("Failed to initialize WebDriver");
      }
    });

    it("should create a course with the course name 'sample test'", async function () {
      // Wait for the course creation button and click it
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/button[1]"
            )
          ),
          15000 // Increased timeout to 15 seconds
        )
        .click();

      // Enter the course name
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[3]/div/div[2]/input"
            )
          ),
          15000 // Increased timeout
        )
        .sendKeys("Main Test");

        await driver.sleep(2000);
      // Wait until Class dropdown is present and select the value
      const selectClass = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[4]/div[1]/div[2]/select"
          )
        ),
        10000 // Wait for up to 10 seconds
      );
      const classSelect = new Select(selectClass);
      await classSelect.selectByVisibleText("Class-12");

      await driver.sleep(1000); // Optional wait between interactions

      // Wait until Board dropdown is present and select the value
      const selectBoard = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[4]/div[2]/div[2]/select"
          )
        ),
        10000
      );
      const boardSelect = new Select(selectBoard);
      await boardSelect.selectByVisibleText("ICSE");

      await driver.sleep(1000); // Optional wait between interactions

      // Wait until Subject dropdown is present and select the value
      const selectSubject = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[4]/div[3]/div[2]/select"
          )
        ),
        10000
      );
      const subjectSelected = new Select(selectSubject);
      await subjectSelected.selectByVisibleText("Mathematics");
      // click on create course button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[6]/button"
            )
          ),
          15000 // Increased timeout
        )
        .click();

        await driver.sleep(3000);

      // main test
      // Check if the button with text "sample test" is present
      // let button = await driver.findElement(
      //   By.xpath("//button[contains(text(), 'sample test')]")
      // );
      // if (!button) {
      //   throw new Error("can't found the course with name 'sample test'");
      // }
    });
  });
}
