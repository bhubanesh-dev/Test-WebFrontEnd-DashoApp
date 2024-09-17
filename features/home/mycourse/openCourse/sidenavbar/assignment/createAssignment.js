import webdriver from "selenium-webdriver";
import { Builder, By, until } from "selenium-webdriver";
import assert from "assert";

export default async  function createAssignment(driver) {
  describe("Create Assignment ", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should create Assignment", async function () {
        await driver.sleep(2000);
      const createClassButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button"
          )
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(createClassButton), 10000);
      await createClassButton.click();

      // fill the form
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[3]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("any assignment title");
        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              " /html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[4]/div/div[1]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("19/09/2024");
        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[4]/div/div[2]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("20/09/2024");

        
        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[4]/div/div[3]/div/div[2]/input"
            )
          ),
          10000
        )
        .sendKeys("40");
        

        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[5]/div/div[2]/textarea"
            )
          ),
          10000
        )
        .sendKeys("any assignment description");

        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[6]/div/input"
            )
          ),
          10000
        )
        .sendKeys("D:\\dashoTest\\assests\\notes.png");
        await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/div/form/div[8]/button"
            )
          ),
          10000
        )
        .click();
    });
  });
}
