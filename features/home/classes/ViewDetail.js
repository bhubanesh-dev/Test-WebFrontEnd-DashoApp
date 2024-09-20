import { By, until } from "selenium-webdriver";

export default async  function viewDetailOfClass(driver) {
    describe("View Detail of class", function () {
        this.timeout(60000); // Set timeout to 60 seconds

        before(async function () {
            if (!driver) {
                throw new Error("driver not set");
            }
        });

        it("should click the button to view details and open the new page", async function () {
            try {
                // Locate the container element
                await driver.sleep(2000);
                const containerElement = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(containerElement), 10000);

                // Locate and click the "View Details" button
                await driver.sleep(2000);
                const viewDetailsButton = await driver.findElement(
                    By.xpath(
                        "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div[2]/div[2]/div[2]/button[2]"
                    )
                );
                await viewDetailsButton.click();
                console.log("View Details button clicked.");

                // Wait for the new page to load by checking for a known element on that page


                await driver.sleep(2000);
                await driver.sleep(2000);
                // const EditElement = await driver.wait(
                //     until.elementLocated(
                //         By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/button")
                //     ),
                //     10000
                // );
                // await EditElement.click();
                // console.log("Edit button clicked.");

                // // Wait for the form to appear
                // const formElement = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div"
                //         )
                //     ),
                //     10000
                // );
                // await driver.wait(until.elementIsVisible(formElement), 10000);
                // console.log("Form is open.");
                // await driver.sleep(1000);
                // const timeInputField = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[1]/div[2]/div"
                //         )
                //     ),
                //     20000
                // );
                // await driver.wait(until.elementIsVisible(timeInputField), 10000);

                // // Use the driver.actions() method to create an Actions instance
                // const actions = driver.actions();

                // // Hover over the time input field to trigger the dropdown
                // await actions.move({ origin: timeInputField }).perform();
                // console.log("Hovered over the time input field.");

                // // Wait for the dropdown to appear
                // const dropdownElementDate = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[1]/div[2]/div/div[2]"
                //         )
                //     ),
                //     20000
                // );
                // await driver.wait(until.elementIsVisible(dropdownElementDate), 10000);
                // console.log("Dropdown appeared after hover.");

                // // Locate and click the specific button in the hours column
                // const hourButton = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[1]/button[11]"
                //         )
                //     ),
                //     20000
                // );
                // await driver.wait(until.elementIsVisible(hourButton), 10000);
                // await driver.sleep(1000);
                // await hourButton.click();
                // const minuteButton = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[2]/button[9]"
                //         )
                //     ),
                //     20000
                // );
                // await driver.wait(until.elementIsVisible(hourButton), 10000);
                // await minuteButton.click();
                // await driver.sleep(1000);
                // const ampmButton = await driver.wait(
                //     until.elementLocated(
                //         By.xpath(
                //             "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[1]/div[1]/div[2]/div/div[2]/div[3]/button[3]"
                //         )
                //     ),
                //     20000
                // // );
                // await driver.wait(until.elementIsVisible(hourButton), 10000);
                // await ampmButton.click();
                // await driver.sleep(1000);
                // await driver
                //     .wait(
                //         until.elementLocated(
                //             By.xpath(
                //                 "/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[2]/div[1]/div[2]/input"
                //             )
                //         ),
                //         10000
                //     )
                //     .sendKeys("12/09/2024");
                // const submitButton = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/div/form/div[7]/button"));
                // await submitButton.click();
                // console.log("Form submitted.");
                // await driver.sleep(2000);
                const copylink = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[2]/div/div/button")
                    ),
                    10000
                );
                await copylink.click();
                // Optionally, wait for a confirmation or for the page to update
                await driver.sleep(3000);
                const uploadVideoButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/button")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(uploadVideoButton), 10000);
                await uploadVideoButton.click();
                console.log("Upload Video button clicked.");

                // Wait for the form to appear
                const videoForm = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(videoForm), 10000);
                console.log("Video upload form is open.");

                // Fill out the form fields
                const linkField1 = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[3]/div[2]/input")
                );
                await linkField1.sendKeys("https://example.com/link1");
                console.log("First link entered.");

                const linkField2 = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[4]/div[2]/input")
                );
                await linkField2.sendKeys("https://example.com/link2");
                console.log("Second link entered.");

                const descriptionField = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[5]/div[2]/textarea")
                );
                await descriptionField.sendKeys("This is a description for the uploaded video.");
                console.log("Description entered.");

                // Click the submit button
                const saveButton = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[7]/div/div[1]/div/div[2]/form/div/div[6]/button")
                );
                await saveButton.click();
                console.log("Form submitted.");

                // Optionally, wait for a confirmation or the page to update
                await driver.sleep(2000);
                const uploadFileButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/button")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(uploadFileButton), 10000);
                await uploadFileButton.click();
                console.log("Upload File button clicked.");
                await driver.sleep(2000);

                // Wait for the file upload form to appear
                const fileUploadForm = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/div[3]/form")
                    ),
                    10000
                );
                await driver.sleep(2000);
                await driver.wait(until.elementIsVisible(fileUploadForm), 10000);
                console.log("File upload form is open.");

                // // Upload the file
                const fileInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/div[3]/form/div/input")
                );

                // Set the file path to be uploaded
                // const filePath = path.resolve("/home/shradha/Desktop/selenium_dasho/features/instagram (1).png");
                await driver.sleep(2000)
                await fileInput.sendKeys('D:\\dashoTest\\assests\\notes.png');
                console.log("File uploaded.");
                await driver.sleep(2000)
                // Fill out the title input field
                const titleInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/div[3]/form/div/div[3]/div[2]/input")
                );
                await titleInput.sendKeys("Sample Title");
                console.log("Title entered.");

                // Fill out the additional input field (textarea)
                const additionalInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/div[3]/form/div/div[4]/div[2]/textarea")
                );
                await additionalInput.sendKeys("This is a sample description.");
                console.log("Description entered.");

                // Click the submit button for the form
                const submitFileButton = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[8]/div/div[1]/div/div[3]/form/div/div[1]/button")
                );
                await submitFileButton.click();
                console.log("File upload form submitted.");

                // Optionally, wait for a confirmation or the page to update
                await driver.sleep(2000);
                const addLinkButton = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/button")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(addLinkButton), 10000);
                await addLinkButton.click();
                console.log("Add Link button clicked.");

                // Wait for the link form to appear
                const linkForm = await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/div[3]/form")
                    ),
                    10000
                );
                await driver.wait(until.elementIsVisible(linkForm), 10000);
                console.log("Link form is open.");

                // Fill out the title input field for the link
                const linkTitleInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/div[3]/form/div/div[3]/div[2]/input")
                );
                await linkTitleInput.sendKeys("Sample Link Title");
                console.log("Link title entered.");
                const linkUrlInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/div[3]/form/div/div[4]/div[2]/input")
                );
                await linkUrlInput.sendKeys("https://www.example.com");
                console.log("Link URL entered.");

                // Fill out the description input field
                const linkDescriptionInput = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/div[3]/form/div/div[5]/div[2]/textarea")
                );
                await linkDescriptionInput.sendKeys("This is a sample link description.");
                console.log("Link description entered.");

                // Click the "Upload" button for the link form
                const linkUploadButton = await driver.findElement(
                    By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[9]/div/div[1]/div/div[3]/form/div/div[6]/button")
                );
                await linkUploadButton.click();
                console.log("Link form submitted.");

                // Optionally, wait for a confirmation or the page to update
                await driver.sleep(2000);


            } catch (error) {
                console.error("Error during the View Detail Test:", error);
                throw error;
            }
        });
    });
}
