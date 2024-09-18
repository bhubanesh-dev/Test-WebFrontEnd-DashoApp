import { By, until } from "selenium-webdriver";

export default async function toggleNoticeReadStatusInHome(driver, asRead) {
    describe("Toggle Notice Read/Unread Status Test", function () {
        this.timeout(60000); // Set a timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("Driver not set");
            }
        });

        it(`should mark the notice as ${asRead ? "read" : "unread"}`, async function () {
            // Click the initial button to access notices
            const initialButton = await driver.wait(
                until.elementLocated(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div[4]/button")
                ),
                20000
            );
            await driver.wait(until.elementIsVisible(initialButton), 20000);
            await initialButton.click();

            // Locate the notice element
            const noticeElement = await driver.wait(
                until.elementLocated(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div/div[1]")
                ),
                10000
            );
            await driver.wait(until.elementIsVisible(noticeElement), 20000);

            // Locate and click the mark as read/unread button
            const markButton = await driver.findElement(
                By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div/div[1]/div/div/div[2]/div[1]/div")
            );
            await markButton.click();
            await driver.sleep(1000);

            // Optionally wait for visual feedback or confirmation of status change
            await driver.wait(
                until.elementLocated(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/div/div[1]") // Adjust as needed based on your UI
                ),
                10000
            );
        });

        after(async function () {
            // Placeholder for any cleanup actions if needed
            console.log("Post-toggle actions completed.");
        });
    });
}
