import { By, until } from "selenium-webdriver";

export default async function deleteNoticeInHome(driver) {
    describe("Delete Notice Feature Test", function () {
        this.timeout(60000); // Set a timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("Driver not set");
            }
        });

        it("should delete a specific notice", async function () {
            try {
                

                // Step 2: Locate the notice element
                const noticeElement = await driver.wait(
                    until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div/div[1]")),
                    10000
                );
                await driver.sleep(1000);
                await driver.wait(until.elementIsVisible(noticeElement), 20000);

                // Step 3: Locate and click the delete button
                const deleteButton = await driver.findElement(By.xpath("//*[contains(@class, 'icon')]"));
                await deleteButton.click();
                await driver.sleep(1000)
                // Step 4: Wait for confirmation or visual feedback (e.g., notice to disappear)
                await driver.wait(
                    until.stalenessOf(noticeElement), // Wait until the notice is no longer present
                    10000
                );

                console.log("Notice deleted successfully.");
            } catch (error) {
                console.error("Error during the Delete Notice Test:", error);
                throw error;
            }
        });

        after(async function () {
            // Placeholder for any cleanup actions if needed
            console.log("Post-delete actions completed.");
        });
    });
}
