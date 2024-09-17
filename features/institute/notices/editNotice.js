import { By, until } from "selenium-webdriver";

export default async function editNotice(driver) {
  describe("eddit a notices in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should edit the notice ", async function () {
      await driver.sleep(1000);
      //click on 3 dot button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div[3]"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(100);
      // click on edit button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div[3]/div/button[2]"
            )
          ),
          10000
        )
        .click();
      // fill the from
      await driver.sleep(200);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/div/form/div[1]/input"
            )
          ),
          10000
        )
        .sendKeys("any notice title with edit ");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/div/form/div[2]/textarea"
            )
          ),
          10000
        )
        .sendKeys("any notice description with edit ");
      const checkbox = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/div/form/div[3]/div[1]/input"
          )
        ),
        10000
      );
      // Wait up to 10 seconds

      // Click the checkbox to select it
      await checkbox.click();
      // click on save
      await driver.sleep(100);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/div/form/div[4]/button"
            )
          ),
          10000
        )
        .click();
    });
  });
}
