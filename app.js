import assert from "assert";
import { By } from "selenium-webdriver";
import { setupWebDriver } from "./config/webdriverConfig.js"; // Use ES module import
import loginTest from "./login/login.js";
import {
  addAdmin,
  addCommentToDiscussion,
  addFilesInViewDetailsOfClass,
  addLinks,
  addLinksInViewDetailsOfClass,
  addNotes,
  addRecordedVideoInViewDetailsOfClass,
  addStudent,
  addStudentGradeInViewDetailsOfAssignment,
  addStudentInCourseMenu,
  addTeacher,
  addVideo,
  changePictureInCourse,
  closeClassesDashBoard,
  closeViewDetailsOfAssignment,
  createAssets,
  createAssignment,
  createClass,
  createCourse,
  createDiscussion,
  createNotice,
  createSyllabus,
  createTimeTable,
  deleteAdmin,
  deleteAssets,
  deleteAssignment,
  deleteAssignmentFile,
  deleteClasses,
  deleteCourse,
  deleteDiscussionComment,
  deleteLinks,
  deleteNotes,
  deleteNotice,
  deleteStudent,
  deleteTeacher,
  deleteVideo,
  editAssets,
  editAssignment,
  editClasses,
  editClassInViewDetailsOfClasses,
  editCourse,
  editCourseInSummary,
  editDiscussion,
  editDiscussionComment,
  editNotice,
  logout,
  openAssetsManager,
  openAssignmentDashboard,
  openClassDashboard,
  openCourse,
  openDiscussionDashboard,
  openInstituteTab,
  openNotice,
  openPeople,
  openSyllabusDashboard,
  openTimeTable,
  publishCourse,
  selectBatchToViewTimeTable,
  studentRequest,
  updateClassAttendance,
  updateTimeTable,
  viewDetailsOfAssignment,
  viewDetailsOfClasses,
  viewTimeTable,
} from "./features/index.js";

let browserChoice = "chrome"; // Default to Chrome if no -browser is passed
let phoneNumber = ""; // Initialize phone number as empty
let driver;

// Check for the command-line arguments to change WebDriver and input phone number
const args = process.argv;
if (args.includes("-browser")) {
  const index = args.indexOf("-browser");
  if (args[index + 1]) {
    browserChoice = args[index + 1].toLowerCase(); // Override default if -browser is specified
  }
}

if (args.includes("-ph")) {
  const index = args.indexOf("-ph");
  if (args[index + 1]) {
    phoneNumber = args[index + 1]; // Get the phone number from the argument
  }
}

// Check if phone number is provided
if (!phoneNumber) {
  console.error(
    "Error: Phone number is required. Use the '-ph' argument to provide the phone number."
  );
  process.exit(1);
}
if (phoneNumber.length !== 10) {
  console.error("Error: Phone number must be exactly 10 digits.");
  process.exit(1);
}

// initialize the web driver and open DashoApp
describe("WebDriver Tests", function () {
  // Increase timeout globally for this suite (e.g., 10 seconds)
  this.timeout(10000);

  before(async function () {
    driver = await setupWebDriver(browserChoice); // Use dynamic browser choice
    if (!driver) {
      throw new Error("Failed to initialize WebDriver");
    }
  });

  it("should open DashoApp and check title", async function () {
    await driver.get("http://localhost:3000/");
    const title = await driver.getTitle();
    assert.strictEqual(title, "DashoApp"); // Correct the expected title here
  });
});

//  initiate user login with otp
describe("Login Flow Test", function () {
  // Increase timeout globally for this suite (e.g., 10 seconds,120000)
  this.timeout(120000);

  before(async function () {
    if (!driver) {
      throw new Error("Failed to initialize WebDriver after driver setup");
    }
  });

  it("should login with OTP with given phone number and complete login process", async function () {
    // Call the loginTest function and pass WebDriver and phone number
    await loginTest(driver, phoneNumber);
    const element = await driver.findElement(
      By.xpath("/html/body/div/div/div/header/div[3]/div[4]/button/i")
    );
    await driver.sleep(1000);
    const text = await element.getText();
    assert.strictEqual(text, "Root");
  });

  after(async function () {
    // await homeFeatures();
    await instituteFeatures();
  });
});

const homeFeatures = async () => {
  await createCourse(driver);

  // will start course menu
  // await editCourse(driver);
  // await driver.sleep(2000);
  // await changePictureInCourse(driver);
  // await driver.sleep(2000);
  // await publishCourse(driver);
  // await driver.sleep(2000);
  // await addStudentInCourseMenu(driver,"vibhav");
  // await addStudentInCourseMenu(driver,"n");
  // await addStudentInCourseMenu(driver,"shradha");

  // await driver.sleep(2000);
  // await deleteCourse(driver);
  // coursemenu end
  // await openCourse(driver);
  //  course summary
  // await editCourseInSummary(driver);
  // await addVideo(driver);
  // await deleteVideo(driver);
  // await addNotes(driver);
  // await deleteNotes(driver);
  // await addLinks(driver);
  // await deleteLinks(driver);
  // course summary end

  // course syllabus start
  // await openSyllabusDashboard(driver);
  // await createSyllabus(driver);
  // course syllabus end

  // course discussion start
  // await openDiscussionDashboard(driver);
  // await createDiscussion(driver);
  // await editDiscussion(driver);
  // await addCommentToDiscussion(driver);
  // await editDiscussionComment(driver);
  // await deleteDiscussionComment(driver);
  // course discussion end

  //course class start
  // await openClassDashboard(driver);
  // await createClass(driver);
  // await editClasses(driver);
  // await viewDetailsOfClasses(driver);
  // await editClassInViewDetailsOfClasses(driver);
  // await addRecordedVideoInViewDetailsOfClass(driver);
  // await driver.sleep(2000);
  // //  bug not working addFilesInViewDetailsOfClass(driver);
  // await addLinksInViewDetailsOfClass(driver);
  // await driver.sleep(3000);
  // await updateClassAttendance(driver);
  // await closeClassesDashBoard(driver);
  // await deleteClasses(driver);
  // // course class end

  // course Assignment start
  // await openAssignmentDashboard(driver);
  // await createAssignment(driver);
  // // rechek : may be bug in state management for submiting a assignment at the time of edit
  // // editAssignment(driver);

  // await viewDetailsOfAssignment(driver);
  // await addStudentGradeInViewDetailsOfAssignment(driver);
  // await driver.sleep(1000);
  // await closeViewDetailsOfAssignment(driver);
  // await deleteAssignment(driver);

  // course Assignment end

  // course people dashboard start
  // await openPeople(driver);
  // await addAdmin(driver);
  // await driver.sleep(2000);
  // await deleteAdmin(driver);
  // await driver.sleep(1000);
  // await addTeacher(driver);
  // await driver.sleep(1000);
  // await deleteTeacher(driver);
  // await driver.sleep(1000);
  // await addStudent(driver);
  // await deleteStudent(driver);
  // await driver.sleep(4000);
  // await studentRequest(driver);
  // await driver.sleep(1000);
  // await deleteStudent(driver);

  // await driver.sleep(1000);

  // await logout(driver);
};

const instituteFeatures = async () => {
  await openInstituteTab(driver);
  await driver.sleep(3000);
  // await openNotice(driver);
  await driver.sleep(2000);
  // await createNotice(driver);
  // await editNotice(driver);
  // await deleteNotice(driver);



  //  for time table in institute section
  //  await openTimeTable(driver);
  //  await createTimeTable(driver);
  //  await selectBatchToViewTimeTable(driver);
  //  await viewTimeTable(driver);
  //  await updateTimeTable(driver);


  //  for assets manager in institute section
  await openAssetsManager(driver);
  await createAssets(driver);
  await editAssets(driver);
  await deleteAssets(driver);

};
