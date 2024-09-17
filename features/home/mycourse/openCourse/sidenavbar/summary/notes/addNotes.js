import { By, until } from "selenium-webdriver";
import assert from "assert";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";

// // Get the directory name of the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Construct the absolute path to the file
// const filePath = path.join(__dirname, 'assets', 'notes.png');
// console.log(`File path: ${filePath}`);

export default async function addNotes(driver) {
  describe("adding a note in open course in course summary", function () {
    this.timeout(50000);

    before(function () {
      if (!driver) {
        throw new Error("driver not set ");
      }
    });

    it("should add a note in course summary", async function () {
      await driver.sleep(1000);
      // click on the notes tab
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div/div[3]/button"
            )
          ),
          10000
        )
        .click();

      // click on the add a file
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/button"
            )
          ),
          10000
        )
        .click();

      // click on upload from computer
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/button"
            )
          ),
          10000
        )
        .click();

      // fill the form details of adding a file
      // enter file title
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/form/div[3]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("any file for notes");

      // Upload the file
      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/form/div[4]/input"
          )
        ),
        10000
      );
      await element.sendKeys(
        ".\\features\\home\\dashborad\\mycourse\\openCourse\\sidenavbar\\summary\\notes\\assests\\notes.png"
      );

      // enter description
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/form/div[5]/div/div[2]/textarea"
            )
          ),
          10000
        )
        .sendKeys("any file description");

      // click on the save notes button
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[3]/form/div[6]/button"
          )
        )
        .click();
    });
    after(async function (params) {
      await driver.sleep(1000);
      const element = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]"
          )
        )
      );
      const noteTitle = await element.getText();

      assert.strictEqual(noteTitle, "any file for notes");
    });
  });
}
