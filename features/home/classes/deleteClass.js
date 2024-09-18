import { By, until } from "selenium-webdriver";

export default async function deleteClass(driver) {
  describe("delete a Class", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should delete a class", async function () {

        
        // Click on the menu button of the specific class
        const menuButton = await driver.findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/button"
          )
        );
        await menuButton.click();
        await driver.sleep(1000);

        // Wait for the dropdown to appear and select the delete option
        const deleteOption = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/button[2]"
            )
          ),
          10000
        );
        await deleteOption.click();
        await driver.sleep(1000);
     
    });

    after(async function () {
      // Placeholder for any cleanup actions if needed
      console.log("Post-class view actions completed.");
    });
  });
}
