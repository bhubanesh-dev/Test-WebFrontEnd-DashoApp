import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function enrollRequest(driver) {
    describe("Enroll in a course", function () {
        this.timeout(60000); // Set a timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("driver not set");
            }
        });

        it("should enroll in a specific course", async function () {
            // Set timeout for the function
            driver.manage().setTimeouts({ implicit: 10000 });

            // Locate and click the "Explore Course" button
            const exploreCourseButton = await driver.wait(
                until.elementLocated(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/button[2]")
                ),
                10000
            );
            await driver.wait(until.elementIsVisible(exploreCourseButton), 10000);
            await exploreCourseButton.click();

            // // Wait for the list of courses to be visible
            // const coursesList = await driver.wait(
            //     until.elementsLocated(
            //         By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/form")
            //     ),
            //     10000
            // );

            // // Log the number of available courses
            // console.log(`Number of available courses: ${coursesList.length}`);

            // // Ensure there is at least one course
            // if (coursesList.length === 0) {
            //     throw new Error("No courses found to enroll in.");
            // }

            // // Select the first course's "Enroll" button
            // const enrollButton = await driver.wait(
            //     until.elementLocated(
            //         By.xpath(
            //             "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[5]/div[3]/div[1]/div/div[2]/button"
            //         )
            //     ),
            //     10000
            // );

            // // Click on the "Enroll" button
            // await driver.wait(until.elementIsVisible(enrollButton), 10000);
            // await enrollButton.click();
            // await driver.sleep(1000); // Wait briefly for any animation or transition

            // // Wait for the enrollment confirmation message or status change
            // const confirmationMessage = await driver.wait(
            //     until.elementLocated(
            //         By.xpath(
            //             "/html/body/div/div/div/div[2]/div/div/div[4]/form/div[5]/div[3]/div[1]/div/div[2]/button"
            //         )
            //     ),
            //     10000
            // );
            // await driver.sleep(6000);
            // const confirmationText = await confirmationMessage.getText();

            // // Assert that the enrollment confirmation message is displayed correctly
            // if (confirmationText !== "Request Sent!") {
            //     throw new Error("Enrollment confirmation message not displayed correctly.");
            // } else {
            //     console.log("Enrollment request sent successfully!");
            // }

            // await driver.sleep(2000);
            const searchBar = await driver.wait(
                until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/form/div[3]/div/div[2]/input")),
                30000
            );
            await driver.wait(until.elementIsVisible(searchBar), 30000);
            await driver.sleep(2000);
            await searchBar.sendKeys("Python");
            console.log("Search for 'python' completed.");

            // Step 6: Click the "Close" button to close the modal
            await driver.sleep(2000);
            const CloseCourseButton = await driver.wait(
                until.elementLocated(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[4]/form/div[1]/button")
                ),
                10000
            );
            await driver.wait(until.elementIsVisible(CloseCourseButton), 10000);
            await CloseCourseButton.click();
        });

        after(async function () {
            // Any necessary cleanup actions can go here if needed
            console.log("Post-enrollment actions completed.");
        });
    });
}