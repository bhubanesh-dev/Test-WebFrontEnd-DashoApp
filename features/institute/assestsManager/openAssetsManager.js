import { By, until } from "selenium-webdriver";

export default async function openAssetsManager(driver) {
  describe("open assets manager in institute ", function () {
    before(function () {
      if (!driver) {
        throw new Error("driver nnot setup");
      }
    });

    it("should open the aassets manager tab", async function () {
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/button[7]"
            )
          ),
          10000
        )
        .click();

        
    });
  });
}
