import { By, until } from "selenium-webdriver";

export default async function updateClassAttd(driver) {
    describe("Update Class Attendance", function () {
        this.timeout(60000); // Set timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("driver not set");
            }
        });

        it("should navigate to the attendance page and mark as present", async function () {
            try {
                // Locate and click the button to navigate to the attendance page
                const attendanceButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[1]/button[2]")
                    ),
                    10000
                );
                await driver.sleep(2000);
                await driver.wait(until.elementIsVisible(attendanceButton), 10000);
                await attendanceButton.click();
                console.log("Navigated to attendance page.");
                await driver.sleep(1000);
                // Locate the element that contains the students or attendance details
                const attendanceElement = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div[1]")
                    ),
                    10000
                );
                await driver.sleep(1000);

                await driver.wait(until.elementIsVisible(attendanceElement), 10000);
                console.log("Attendance element found.");

                // Inside the element, locate the button to mark the student as present
                await driver.sleep(1000);

                const markPresentButton = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[2]/button[1]")
                );
                await driver.sleep(1000);

                await markPresentButton.click();
                console.log("Student marked as present.");

                // Click the back button to return to the previous page
                const backButton = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/button")
                );
                await driver.sleep(1000);

                await backButton.click();
                console.log("Navigated back to the previous page.");

                // Optionally, wait for the page to load or the changes to take effect
                await driver.sleep(2000);

            } catch (error) {
                console.error("Error during the Update Class Attendance Test:", error);
                throw error;
            }
        });
    });
}
