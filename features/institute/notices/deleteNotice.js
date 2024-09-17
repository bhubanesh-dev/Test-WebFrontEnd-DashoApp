import { By, until } from "selenium-webdriver";

export default async function deleteNotice(driver) {
  describe("delete a notices in institute ", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should delete the notice ", async function () {
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
      // click on delete button
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div[3]/div/button[1]"
            )
          ),
          10000
        )
        .click();
      // confirm delete
      await driver.sleep(200);
      
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/div/div/button[1]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
