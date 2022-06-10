// TODO Navbar: if not signed in add sign in button, if signed have signout button
// TODO remove Select a Student from the Home page
// TODO Add explanation of webstite top homepage (including click "demo or sign in")

const { DateTime } = require('luxon');
const faker = require('faker');

const genSampleData = (stDt, totDays, totPts) => {
  const daysSoFar = -Math.floor(DateTime.fromISO(stDt).diffNow('days').days);
  const goalPtsPerDay = totPts / totDays;
  const studentMaxPtsPerDay = Math.random() * goalPtsPerDay * 1.5;
  const studentMinPtsPerDay = Math.random() * goalPtsPerDay * 0.5;
  const avgDaysPerLesson = 5;

  const theArray = [];
  let currPts = 0;
  let day = 1;
  while (day < daysSoFar && currPts < totPts) {
    day += faker.datatype.number({ min: 1, max: avgDaysPerLesson });
    const ptsThisPeriod =
      Math.random() * (studentMaxPtsPerDay + studentMinPtsPerDay) +
      studentMinPtsPerDay;
    currPts = Math.min(
      totPts,
      currPts + Math.round(ptsThisPeriod * avgDaysPerLesson),
    );
    theArray.push({
      'Date Reported': DateTime.fromISO(stDt).plus({ days: day }).toISODate(),
      'Current Story Point': currPts,
    });
  }
  return theArray;
};

console.log(genSampleData('2022-01-01', 250, 480));


const createDatePoints = (stDt, totDays, totPts) => {
  const daysSoFar = -Math.floor(DateTime.fromISO(stDt).diffNow('days').days);
  const goalPtsPerDay = totPts / totDays;
  const studentMaxPtsPerDay = Math.random() * goalPtsPerDay * 1.5;
  const studentMinPtsPerDay = Math.random() * goalPtsPerDay * 0.5;
  const avgDaysPerLesson = 5;

  const datePoints = [];
  let currPts = 0;
  for (
    let day = 0;
    day < daysSoFar;
    day += Math.round(Math.random() * avgDaysPerLesson) + 1
  ) {
    const pacePerDay = Math.round(
      Math.random() * (studentMaxPtsPerDay + studentMinPtsPerDay) +
        studentMinPtsPerDay,
    );
    const ptsCompleted = pacePerDay * avgDaysPerLesson;
    currPts += ptsCompleted;
    datePoints.push({
      'Date Reported': DateTime.fromISO(stDt).plus({ days: day }).toISODate(),
      'Current Story Point': currPts,
    });
  }
  return datePoints;
};
