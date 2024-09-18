import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function createNoticeInHome(driver) {
    describe("Create Notice Feature Test", function () {
        this.timeout(60000); // Set a timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("Driver not set");
            }
        });

        it("should create a notice successfully", async function () {
            try {
                

                // Step 2: Click on the "Create Notice" button
                const createNoticeButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/button")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(createNoticeButton), 10000);
                await createNoticeButton.click();

                // Step 3: Wait for the notice form to open
                const noticeForm = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/form")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(noticeForm), 10000);

                // Step 4: Fill in the notice form fields
                const titleField = await driver.findElement(By.name("noticeTitle"));
                const detailsField = await driver.findElement(By.name("noticeText"));

                // Fill the fields
                await titleField.sendKeys("Test Notice Title");
                await driver.sleep(100);
                await detailsField.sendKeys("This is a detailed description for the test notice.");

                // Step 5: Check the appropriate checkbox for "Choose Where to Post"
                const checkboxField = await driver.findElement(By.css('input[type="checkbox"]'));
                await driver.sleep(100);

                // Check if the checkbox is not already selected, and click it if necessary
                const isChecked = await checkboxField.isSelected();
                if (!isChecked) {
                    await checkboxField.click();
                }

                // Step 6: Click on the "Create" button to submit the notice
                const createButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/form/div/div[7]/button")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(createButton), 30000);
                await createButton.click();

                // Step 7: Verify the notice creation success
                const confirmationMessage = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div")
                    ),
                    30000
                );

                // Additional assertions or checks can be added here if needed
                console.log("Notice created successfully!");

            } catch (error) {
                console.error("An error occurred while creating the notice:", error);
                throw error;
            }
        });

        after(async function () {
            // Placeholder for any cleanup actions if needed
            console.log("Post-notice creation actions completed.");
        });
    });
}
