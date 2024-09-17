import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteNotes(driver) {
  describe("delete a note from course summary in notes", function () {
    this.timeout(30000);
    before(async function (params) {
      if (!driver) throw new Error("driver not seetup");
    });

    it('should delete a note ', async function (params) {
        await driver.sleep(5000);
        await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/button')).click();
        
    });
    after(async function (params) {
        driver.wait(
            until.elementLocated(
              By.xpath(
                "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]"
              )
            )
          );
          const noteTitle =await element.getText();
          assert.notStrictEqual(noteTitle,"any file for notes","not success");
    })
  });
}
