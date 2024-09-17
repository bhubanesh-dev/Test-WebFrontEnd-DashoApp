import { By, until } from "selenium-webdriver";

export default async function createSyllabus(driver) {
  describe("open syllabus dashboard", function () {
    this.timeout(30000); // Increase the timeout to 10 seconds

    before(function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should open syllabus dashboard", async function () {
      await driver.sleep(1000);
      //   click on the toogle edit button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div[1]"
            )
          ),
          10000
        )
        .click();
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/button"
            )
          ),
          10000
        )
        .click();

      // fill the form
      await driver.sleep(2000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[2]/div[2]/select"
            )
          ),
          10000
        )
        .sendKeys("1");

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[4]/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("Chapter 1");

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[5]/button"
            )
          ),
          10000
        )
        .click();

      // form submited
      // again toggle to add a sub chapter
      await driver.sleep(1000);
      //   toggle to edit mode
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div[1]"
            )
          ),
          10000
        )
        .click();

      await driver.sleep(3000);
      // add a new sub section
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/li[1]/ol/button"
            )
          ),
          10000
        )
        .click();

      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/li/ol/div/li/span/button[1]"
            )
          ),
          10000
        )
        .click();
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/li/ol/div/li/textarea"
            )
          ),
          10000
        )
        .sendKeys("sub chapter - 1.1");

      // click on save
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/li/ol/div/li/button"
            )
          ),
          10000
        )
        .click();

      // end of a sub section

      //   // again toggle to add another chapter
      await driver.sleep(2000);
      //   //   add another chapter
      //   //   click on add chaapter button await driver
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/button"
            )
          ),
          10000
        )
        .click();

      //   //   fill the form

      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[2]/div[2]/select"
            )
          ),
          10000
        )
        .sendKeys("2");

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[4]/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("chapter 2 : A Test Sample");

      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/div/div/form/div[5]/button"
            )
          ),
          10000
        )
        .click();
      // toggle edit button
      await driver.sleep(2000); // Wait for any initial loading
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div[1]"
            )
          ),
          10000
        )
        .click();

      // delete the last chapter (example : chapter 2)
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/ol/li[2]/button[2]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
