interface CourseGoal {
  title: string;
  description: string;
  accessAvailableTill: Date;
}

// Function to create Object based on CourseGoal type while utilising the Partial keyword
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //let courseStructure : CourseGoal = {title: title, description: description, accessAvailableTill: date};
  let courseStructure: Partial<CourseGoal> = {};
  courseStructure.title = title;
  courseStructure.description = description;
  courseStructure.accessAvailableTill = date;
  return courseStructure as CourseGoal;
}

//using Readonly keyword to stop operations on the array
const ppl: Readonly<string[]> = ["Max", "May"];
//ppl.push("Brock");
