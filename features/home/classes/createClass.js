

import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function createClass(driver) {
    describe("Create Class", function () {
        this.timeout(60000); // Set a timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("driver not set");
            }
        });

        it("should create class", async function () {
            try {
                await driver.sleep(3000);
                const createClassButton = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/button"
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
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div"
                        )
                    ),
                    10000
                );

                await driver.wait(until.elementIsVisible(formElement), 20000);
                await driver.sleep(1000);
                const timeInputField = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[1]/div[2]/div"
                        )
                    ),
                    20000
                );
                await driver.wait(until.elementIsVisible(timeInputField), 10000);

                // Use the driver.actions() method to create an Actions instance
                const actions = driver.actions();

                // Hover over the time input field to trigger the dropdown
                await actions.move({ origin: timeInputField }).perform();
                console.log("Hovered over the time input field.");

                // Wait for the dropdown to appear
                const dropdownElement = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]"
                        )
                    ),
                    20000
                );
                await driver.wait(until.elementIsVisible(dropdownElement), 10000);
                console.log("Dropdown appeared after hover.");

                // Locate and click the specific button in the hours column
                const hourButton = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[1]/button[6]"
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
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[2]/button[3]"
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
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[1]/div[2]/div/div[2]/div[3]/button[3]"
                        )
                    ),
                    20000
                );
                await driver.wait(until.elementIsVisible(hourButton), 10000);
                await ampmButton.click();
                console.log("Hour button clicked.");
                await driver.sleep(1000);
                await driver
                    .wait(
                        until.elementLocated(
                            By.xpath(
                                "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[1]/div[3]/div[2]/select"
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
                                "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[2]/div/div[2]/input"
                            )
                        ),
                        10000
                    )
                    .sendKeys("17/09/2024");
                await driver.sleep(1000);
                await driver
                    .wait(
                        until.elementLocated(
                            By.xpath(
                                "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[3]/div/div[2]/select"
                            )
                        ),
                        10000
                    )
                    .sendKeys("sample Test");
                const submitButton = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/form/div[5]/button"
                    )
                );
                await submitButton.click();

                // Wait for confirmation that the class was created (if applicable)
                // const newClassElement = await driver.wait(
                //   until.elementLocated(By.xpath("//div[contains(text(), 'Class Name')]")), // Replace with a unique identifier for the new class
                //   10000
                // );
                // await driver.wait(until.elementIsVisible(newClassElement), 10000);

            } catch (error) {
                console.error("Error during the Create Class Test:", error);
                throw error;
            }
        });
    });
}
