import { By, until } from "selenium-webdriver";

export default async function openTimeTable(driver) {
  describe("open time table in institute ", function () {
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should open the time table tab", async function () {
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/button[8]"
            )
          ),
          10000
        )
        .click();

        
    });
  });
}
