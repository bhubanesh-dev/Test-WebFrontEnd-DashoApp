import { By, until } from "selenium-webdriver";
import assert from "assert";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";

// // Get the directory name of the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Construct the absolute path to the file (you can update the file name as needed)
// const filePath = path.join(__dirname, 'assets', 'notes.png');
// console.log(`File path: ${filePath}`);

export default async function changePictureInCourse(driver) {
  if (!driver) {
    throw new Error("Driver setup problem");
  }

  describe("change course pic from course menu", function () {
    this.timeout(30000); // Increase the timeout for the test

    before(async function () {
      // Ensure driver is properly initialized
      if (!driver) {
        throw new Error("Driver is not initialized");
      }
    });

    it("change the course pic from the course menu ", async function () {
      // Click on the 3-dot button on a course
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

      // Click on the "Change Pic" option
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div[1]/div/div/div[2]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();

      // Find the file input and upload the file
      const fileInput = await driver.findElement(
        By.xpath(
          "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/input"
        )
      );
      await fileInput.sendKeys('D:\\dashoTest\\assests\\notes.png'); // Send the file path for upload

      await driver.sleep(1000); //
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/button"
            )
          ),
          10000
        )
        .click();
    
    });
  });
}
