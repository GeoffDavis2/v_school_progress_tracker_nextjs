const { DateTime } = require('luxon');

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

// create recursive function that returns an array datePoints
// parameters will be startDt, numDays, and maxPts
// startDt will be a date string
// numDays will be a number
// maxPts will be a number
// datePoints will be an array of objects {date, points}
// array will be sorted by date
// points will be increasing random number between 1 and maxPts
function createDatePoints(totDays, totPts) {
  const randNumDays = Math.round(
    Math.min(Math.random() * totDays * 1.1, totDays),
  );
  const randStDt = DateTime.now().minus({ days: randNumDays });
  const calcPtsPerDay = totPts / totDays;

  const datePoints = [];
  let currPts = 0;
  for (let i = 0; i < randNumDays; i++) {
    const goalPts = i * calcPtsPerDay;
    const delta = goalPts - currPts;
    const chanceCompleteLesson = Math.random() >= 5 / delta;
    const randPts = Math.round(Math.random() * delta * 1.1);
    if (chanceCompleteLesson) {
      currPts += randPts;
      datePoints.push({ 'Date Reported': randStDt.plus({ days: i}).toISODate(), 'Current Story Point': currPts });
    }
  }
  return datePoints;
}

// 'Date Reported': '2022-05-10', 'Current Story Point': 465.8

console.log(createDatePoints(250, 480));
