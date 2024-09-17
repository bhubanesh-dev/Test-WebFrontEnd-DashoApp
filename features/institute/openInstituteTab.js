import { By, until } from "selenium-webdriver";

export default async function openInstituteTab(driver) {
  describe("open institute section ", function () {
    this.timeout(10000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should open the institute section ", async function () {
      await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/header/div[2]/button[3]")
          ),
          10000
        )
        .click();


        await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/div/div/button")
          ),
          10000
        )
        .click(); //

        await driver
        .wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/button")
          ),
          10000
        )
        .click();
        await driver.sleep(2000);
    });
  });
}
