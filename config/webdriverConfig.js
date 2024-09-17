import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import edge from 'selenium-webdriver/edge.js';
import path from 'path';
import { fileURLToPath } from 'url';



// Convert `__dirname` for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up paths to the driver executables
const chromeService = new chrome.ServiceBuilder(
  path.join(__dirname, '../chrome/chromedriver')
);
const edgeService = new edge.ServiceBuilder(
  path.join(__dirname, '../edge/msedgedriver')
);

// Function to set up WebDriver based on the browser choice
export const setupWebDriver = async (browserChoice) => {
  try {
    if (browserChoice === 'chrome') {
      return new Builder()
        .forBrowser('chrome')
        .setChromeService(chromeService)
        .build();
    } else if (browserChoice === 'edge') {
      return new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeService(edgeService)
        .build();
    } else {
      throw new Error(`Unsupported browser: ${browserChoice}`);
    }
  } catch (error) {
    console.error(`Error setting up WebDriver: ${error.message}`);
    return null;
  }
  
};
