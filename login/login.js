import { By, until } from "selenium-webdriver"; // Replace require with import
import readline from "readline"; // Import readline module

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get OTP from the user via console input
const getOtpFromUser = () => {
  return new Promise((resolve) => {
    rl.question("Please enter the OTP: ", (otp) => {
      resolve(otp);
      rl.close();
    });
  });
};

// Export the loginTest function as an ES module
const loginTest = async (driver, phoneNumber) => {
  try {
    await driver.sleep(500);

    // Locate the phone number input field
    let phoneNumberField = await driver.wait(
      until.elementLocated(By.css('input[name="phoneno"]')),
      3000
    );

    // Function to input digits with a delay
    for (let i = 0; i < phoneNumber.length; i++) {
      let digit = phoneNumber[i];
      await phoneNumberField.sendKeys(digit);
      await new Promise((resolve) => setTimeout(resolve,50)); // Wait for 0.1 second between digits
    }
    await driver.sleep(1000);
    // Find the submit button by its XPath or CSS and click it
    await driver.findElement(By.css('button[type="button"]')).click();

    // Optional: Wait for the page to load after login
    await driver.sleep(2000);

    // Prompt for OTP input
    const otp = await getOtpFromUser();

    // Input the OTP digits
    await driver.findElement(By.css('input[name="first"]')).sendKeys(otp[0]);
    await driver.findElement(By.css('input[name="second"]')).sendKeys(otp[1]);
    await driver.findElement(By.css('input[name="third"]')).sendKeys(otp[2]);
    await driver.findElement(By.css('input[name="fourth"]')).sendKeys(otp[3]);
    await driver.findElement(By.css('input[name="fifth"]')).sendKeys(otp[4]);

    // Click on verify button
    await driver
      .findElement(By.className("OTPinputUnit_submitOtpbtn__29FYU"))
      .click();

    // Wait for the response and page to load
    await driver.sleep(1000);

   
  } catch (error) {
    console.log("Error:", error);
  } 
};

export default loginTest;
