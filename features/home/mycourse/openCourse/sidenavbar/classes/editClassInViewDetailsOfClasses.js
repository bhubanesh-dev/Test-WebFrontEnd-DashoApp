import { By, until, Select } from "selenium-webdriver";
// Import Select class
import assert from "assert";

export default async  function editClassInViewDetailsOfClasses(driver) {
  describe("edit Class in view details of a class", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should edit class in view details with changing time, status, description", async function () {
      // Click on edit buttton 
      await driver.sleep(5000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/button"
            )
          ),
          10000
        )
        .click();
      
      

      // Fill the form to edit the changes
      await driver.sleep(200);
      await driver.sleep(1000);
        await driver
          .wait(
            until.elementLocated(
              By.xpath(
                "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/div/div/form/div[2]/div[1]/div[2]/input"
              )
            ),
            10000
          )
          .sendKeys("20/09/2024");
        await driver.sleep(1000);

      // Select the time ("45 mins") from the dropdown
      let selectElement1 = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[3]/div[2]/select"
          )
        ),
        10000
      );
      let select1 = new Select(selectElement1);
      await select1.selectByVisibleText("45 mins");

      // Select the status ("postponed") from the dropdown
      let selectElement2 = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/div/div/form/div[2]/div[2]/div[2]/select"
          )
        ),
        10000
      );
      let select2 = new Select(selectElement2);
      await select2.selectByVisibleText("completed");

      // Enter the description
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/div/div/form/div[6]/div/div[2]/textarea"
          )
        )
        .sendKeys("any description for submit with edit");

      // Click on the submit button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[1]/div[1]/div/div/form/div[7]/button"
          )
        )
        .click();
    });
  });
}
