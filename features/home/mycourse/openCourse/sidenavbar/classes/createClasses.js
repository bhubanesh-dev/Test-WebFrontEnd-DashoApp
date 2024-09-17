import webdriver from "selenium-webdriver";
import { Builder, By, until } from "selenium-webdriver";
import assert from "assert";

export default async  function createClasses(driver) {
  describe("Create Class", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should create class", async function () {
      try {
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

        // Wait for the form to appear
        await driver.sleep(2000);
        const formElement = await driver.wait(
          until.elementLocated(
            By.xpath("/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div")
          ),
          10000
        );

        await driver.wait(until.elementIsVisible(formElement), 20000);
        await driver.sleep(1000);
        const timeInputField = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[1]/div[2]/div"
            )
          ),
          20000
        );
        await driver.wait(until.elementIsVisible(timeInputField), 10000);

        // Use the driver.actions() method to create an Actions instance
        const actions = driver.actions();

        // Hover over the time input field to trigger the dropdown
        await actions.move({ origin: timeInputField }).perform();
       

        // Wait for the dropdown to appear
        const dropdownElement = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]"
            )
          ),
          20000
        );
        await driver.wait(until.elementIsVisible(dropdownElement), 10000);
        

        // Locate and click the specific button in the hours column
        const hourButton = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[1]/button[4]"
            )
          ),
          20000
        );
        await driver.wait(until.elementIsVisible(hourButton), 10000);
        await driver.sleep(1000);
        await hourButton.click();
        const minuteButton = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[2]/button[33]"
            )
          ),
          20000
        );
        await driver.wait(until.elementIsVisible(hourButton), 10000);
        await minuteButton.click();
        await driver.sleep(1000);
        const ampmButton = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[3]/button[2]"
            )
          ),
          20000
        );
        await driver.wait(until.elementIsVisible(hourButton), 10000);
        await ampmButton.click();
       
        await driver.sleep(1000);
        await driver
          .wait(
            until.elementLocated(
              By.xpath(
                "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[1]/div[3]/div[2]/select"
              )
            ),
            10000
          )
          .sendKeys("10 mins");
        await driver.sleep(1000);
        await driver
          .wait(
            until.elementLocated(
              By.xpath(
                "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[2]/div/div[2]/input"
              )
            ),
            10000
          )
          .sendKeys("13/09/2024");
        await driver.sleep(1000);

        const submitButton = await driver.findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/form/div[4]/button"
          )
        );
        await submitButton.click();
      } catch (error) {
        console.error("Error during the Create Class Test:", error);
        throw error;
      }
    });
  });
}
