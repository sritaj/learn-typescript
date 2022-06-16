"use strict";
function createCourseGoal(title, description, date) {
    let courseStructure = {};
    courseStructure.title = title;
    courseStructure.description = description;
    courseStructure.accessAvailableTill = date;
    return courseStructure;
}
const ppl = ["Max", "May"];
