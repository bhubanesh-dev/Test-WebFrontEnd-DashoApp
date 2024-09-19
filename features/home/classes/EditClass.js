import { By, until } from "selenium-webdriver";

export default async function editClass(driver) {
    describe("Edit Class", function () {
        this.timeout(60000); // Set timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("driver not set");
            }
        });

        it("should edit the class", async function () {
            await driver.sleep(1500);
            try {
                // Step 1: Locate the element container
                const containerElement = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(containerElement), 10000);

                // Step 2: Locate and click the button inside the container
                const dropdownButton = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/button"
                    )
                );
                await dropdownButton.click();
                console.log("Dropdown button clicked.");

                // Step 3: Wait for the dropdown to open
                const dropdownElement = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div"
                        )
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(dropdownElement), 10000);
                console.log("Dropdown appeared.");

                // Step 4: Locate and click the "Edit" button inside the dropdown
                const editButton = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/button[1]"
                    )
                );
                await editButton.click();
                console.log("Edit button clicked.");

                // Step 5: Wait for the form to open
                const formElement = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div"
                        )
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(formElement), 10000);
                console.log("Form appeared after clicking Edit button.");

                // You can now interact with the form fields to edit the class details
                // Example: Filling in a text input

                await driver.sleep(1000);
                const timeInputField = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/div"
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
                const dropdownElementDate = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/div"
                        )
                    ),
                    20000
                );
                await driver.wait(until.elementIsVisible(dropdownElementDate), 10000);
                console.log("Dropdown appeared after hover.");

                // Locate and click the specific button in the hours column
                const hourButton = await driver.wait(
                    until.elementLocated(
                        By.xpath(
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[1]/button[9]"
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
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[2]/button[31]"
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
                            "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[3]/button[3]"
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
                                "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[2]/div[1]/div[2]/input"
                            )
                        ),
                        10000
                    )
                    .sendKeys("13/09/2024");
                await driver.sleep(1000);
                const selectField = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[2]/div[2]/div[2]/select"
                    )
                );

                // Step 2: Click the select field to open the options
                await selectField.click();
                console.log("Select field clicked to open options.");

                // Step 3: Locate and choose the third option
                const optionToSelect = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[2]/div[2]/div[2]/select/option[3]"
                    )
                );

                await optionToSelect.click();
                console.log("Option 2 (third option) selected from dropdown.");


                // Step 2: Click the select field to open the options
                await selectField.click();
                console.log("Select field clicked to open options.");

                // Step 3: Locate and choose the third option
                const optionThreeSelect = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[2]/div[2]/div[2]/select/option[1]"
                    )
                );

                await optionThreeSelect.click();

                // After interacting with the form, you might want to submit it
                const submitButton = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/form/div[7]/button"));
                await submitButton.click();
                console.log("Form submitted.");

                // Optionally, wait for a confirmation or for the page to update
                await driver.sleep(2000); // Adjust sleep duration if needed

            } catch (error) {
                console.error("Error during the Edit Class Test:", error);
                throw error;
            }
        });
    });
}
