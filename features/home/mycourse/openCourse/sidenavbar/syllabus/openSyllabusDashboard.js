import { By, until } from "selenium-webdriver";

export default async function openSyllabusDashboard(driver) {
  describe("open syllabus dashboard", function () {
    this.timeout(10000); // Increase the timeout to 10 seconds

    before(function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should open syllabus dashboard", async function () {
      await driver.sleep(1000); // Wait for any initial loading
      await driver
        .wait(
          until.elementLocated(By.xpath("/html/body/div/div/div/div[1]/button[2]")),
          10000 // Wait up to 10 seconds for the element
        )
        .click(); // Click the syllabus dashboard button
    });
  });
}
