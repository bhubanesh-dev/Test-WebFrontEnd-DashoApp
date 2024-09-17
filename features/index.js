import createCourse from "./home/mycourse/createCourse/createCourse.js";
import editCourseInSummary from "./home/mycourse/openCourse/sidenavbar/summary/about/editCourseInSummary.js";
import logout from "./logout/logout.js";
import openCourse from "./home/mycourse/openCourse/openCourse.js";
import addVideo from "./home/mycourse/openCourse/sidenavbar/summary/videos/addVideo.js";
import deleteVideo from "./home/mycourse/openCourse/sidenavbar/summary/videos/deleteVideo.js";
import addNotes from "./home/mycourse/openCourse/sidenavbar/summary/notes/addNotes.js";
import deleteNotes from "./home/mycourse/openCourse/sidenavbar/summary/notes/deleteNotes.js";
import addLinks from "./home/mycourse/openCourse/sidenavbar/summary/links/addLinks.js";
import deleteLinks from "./home/mycourse/openCourse/sidenavbar/summary/links/deleteLinks.js";
import createDiscussion from "./home/mycourse/openCourse/sidenavbar/discussion/createDiscussion.js";
import openDiscussionDashboard from "./home/mycourse/openCourse/sidenavbar/discussion/openDiscussionDashboard.js";
import editDiscussion from "./home/mycourse/openCourse/sidenavbar/discussion/editDiscussion.js";
import addCommentToDiscussion from "./home/mycourse/openCourse/sidenavbar/discussion/addCommentToDiscussion.js";
import deleteDiscussionComment from "./home/mycourse/openCourse/sidenavbar/discussion/deleteDiscussionComment.js";
import editDiscussionComment from "./home/mycourse/openCourse/sidenavbar/discussion/editDiscussionComment.js";
import openPeople from "./home/mycourse/openCourse/sidenavbar/people/openPeople.js";
import addAdmin from "./home/mycourse/openCourse/sidenavbar/people/addAdmin.js";
import deleteAdmin from "./home/mycourse/openCourse/sidenavbar/people/deleteAdmin.js";
import addTeacher from "./home/mycourse/openCourse/sidenavbar/people/addTeacher.js";
import deleteTeacher from "./home/mycourse/openCourse/sidenavbar/people/deleteTeacher.js";
import addStudent from "./home/mycourse/openCourse/sidenavbar/people/addStudent.js";
import deleteStudent from "./home/mycourse/openCourse/sidenavbar/people/deleteStudent.js";
import studentRequest from "./home/mycourse/openCourse/sidenavbar/people/studentRequest.js";
import editCourse from "./home/mycourse/courseMenu/editCourse.js";
import deleteCourse from "./home/mycourse/courseMenu/deleteCourse.js";
import publishCourse from "./home/mycourse/courseMenu/publishCourse.js";
import changePictureInCourse from "./home/mycourse/courseMenu/changePicture.js";
import addStudentInCourseMenu from "./home/mycourse/courseMenu/addStudentInCourseMenu.js";
import openSyllabusDashboard from "./home/mycourse/openCourse/sidenavbar/syllabus/openSyllabusDashboard.js";
import createSyllabus from "./home/mycourse/openCourse/sidenavbar/syllabus/createSyllabus.js";
import createClass from "./home/mycourse/openCourse/sidenavbar/classes/createClasses.js";
import openClassDashboard from "./home/mycourse/openCourse/sidenavbar/classes/openClassDashboard.js";
import editClasses from "./home/mycourse/openCourse/sidenavbar/classes/editClasses.js";
import viewDetailsOfClasses from "./home/mycourse/openCourse/sidenavbar/classes/viewDetailsOfClasses.js";
import deleteClasses from "./home/mycourse/openCourse/sidenavbar/classes/deleteClasses.js";
import addRecordedVideoInViewDetailsOfClass from "./home/mycourse/openCourse/sidenavbar/classes/addRecordedVideoInViewDetailsOfClass.js";
import addLinksInViewDetailsOfClass from "./home/mycourse/openCourse/sidenavbar/classes/addLinksInViewDetailsOfClass.js";
import updateClassAttendance from "./home/mycourse/openCourse/sidenavbar/classes/updateClassAttendance.js";
import editClassInViewDetailsOfClasses from "./home/mycourse/openCourse/sidenavbar/classes/editClassInViewDetailsOfClasses.js";
import closeClassesDashBoard from "./home/mycourse/openCourse/sidenavbar/classes/closeClassesDashboard.js";
import openAssignmentDashboard from "./home/mycourse/openCourse/sidenavbar/assignment/openAssignment.js";
import createAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/createAssignment.js";
import addFilesInViewDetailsOfClass from "./home/mycourse/openCourse/sidenavbar/classes/addFilesInViewDetailsOfClass.js";
import editAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/editAssignment.js";
import deleteAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/deleteAssignment.js";
import viewDetailsOfAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/viewDetailsOfAssignment.js";
import deleteAssignmentFile from "./home/mycourse/openCourse/sidenavbar/assignment/deleteAssignmentFile.js";
import addStudentGradeInViewDetailsOfAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/addStudentGradeInViewDetailsOfAssignment.js";
import closeViewDetailsOfAssignment from "./home/mycourse/openCourse/sidenavbar/assignment/closeViewDetailsOfAssignment.js";

// institute
import openInstituteTab from "./institute/openInstituteTab.js";
// for notice in institute section
import openNotice from "./institute/notices/openNotice.js";
import createNotice from "./institute/notices/createNotice.js";
import editNotice from "./institute/notices/editNotice.js";
import deleteNotice from "./institute/notices/deleteNotice.js";

// for time table in institute
import openTimeTable from "./institute/timeTable/openTimeTable.js";
import createTimeTable from "./institute/timeTable/createTimeTable.js";
import selectBatchToViewTimeTable from "./institute/timeTable/selectBatchToViewTimeTable.js";
import viewTimeTable from "./institute/timeTable/viewTimeTable.js";
import updateTimeTable from "./institute/timeTable/updateTimeTable.js";

// for assets manager in institute
import openAssetsManager from "./institute/assestsManager/openAssetsManager.js";
import createAssets from "./institute/assestsManager/createAssets.js";
import editAssets from "./institute/assestsManager/editAssets.js";
import deleteAssets from "./institute/assestsManager/deleteAssets.js";


export {
  createCourse,
  logout,
  openCourse,
  editCourseInSummary,
  addVideo,
  deleteVideo,
  addNotes,
  deleteNotes,
  addLinks,
  deleteLinks,
  createDiscussion,
  openDiscussionDashboard,
  editDiscussion,
  addCommentToDiscussion,
  deleteDiscussionComment,
  editDiscussionComment,
  openPeople,
  addAdmin,
  deleteAdmin,
  addTeacher,
  deleteTeacher,
  addStudent,
  deleteStudent,
  studentRequest,
  editCourse,
  deleteCourse,
  publishCourse,
  changePictureInCourse,
  addStudentInCourseMenu,
  openSyllabusDashboard,
  createSyllabus,
  openClassDashboard,
  createClass,
  editClasses,
  viewDetailsOfClasses,
  editClassInViewDetailsOfClasses,
  deleteClasses,
  addRecordedVideoInViewDetailsOfClass,
  addFilesInViewDetailsOfClass,
  addLinksInViewDetailsOfClass,
  updateClassAttendance,
  closeClassesDashBoard,
  openAssignmentDashboard,
  createAssignment,
  editAssignment,
  deleteAssignment,
  viewDetailsOfAssignment,
  deleteAssignmentFile,
  addStudentGradeInViewDetailsOfAssignment,
  closeViewDetailsOfAssignment,
  openInstituteTab,
  openNotice,
  createNotice,
  editNotice,
  deleteNotice,
  openTimeTable,
  createTimeTable,
  selectBatchToViewTimeTable,
  viewTimeTable,
  updateTimeTable,
  openAssetsManager,
  createAssets,
  editAssets, deleteAssets
};
