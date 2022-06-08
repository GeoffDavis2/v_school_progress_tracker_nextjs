// create function to create array of objects {studentId, studentName}
// studentName will be a random name string
// parameters will be an array of studentIds
function createStudentArray(studentIds) {
  const studentArray = [];
  for (let i = 0; i < studentIds.length; i++) {
    const studentName = faker.name.findName();
    const studentId = studentIds[i];
    studentArray.push({ studentId, studentName });
  }
  return studentArray;
}

// console.log(createStudentArray(['1', '2', '3', '4', '5']));

// create function that returns an array datePoints
// parameters will be startDt, numDays, and maxPts
// startDt will be a date string
// numDays will be a number
// maxPts will be a number
// datePoints will be an array of objects {date, points}
// array will be sorted by date
// points will be increasing random number between 1 and maxPts
function createDatePointsArray(startDt, numDays, maxPts) {
  const datePoints = [];
  const startDtObj = new Date(startDt);
  for (let i = 0; i < numDays; i++) {
    const date = new Date(startDtObj.setDate(startDtObj.getDate() + i));
    const points = Math.floor(Math.random() * maxPts) + 1;
    datePoints.push({ date, points });
  }
  return datePoints;
}
