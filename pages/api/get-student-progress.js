// import { getSession } from 'next-auth/react';
import { getAllRecs } from '../../helpers/get-all-records';
import { DateTime } from 'luxon';

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

const calcGoalPts = (totPts, dayNum, totalDays) =>
  Math.round((totPts * dayNum) / totalDays);

export default async function handler(req, res) {
  // const session = await getSession({ req });
  // if (!session) return res.status(401).json({ errMsg: 'Not Authenticated' });

  if (!req || !req.body)
    return res
      .status(400)
      .json({ errMsg: 'Insufficient request (req) in api call.' });

  const { AIRTABLE_ENDPOINT, STUDENT_TRACKING_AIR_TABLE_ID } = process.env;
  const theStudent = JSON.parse(req.body);
  const filter = `&filterByFormula=AND%28%7BStudentRecordID%7D%3D%27${theStudent.studentId}%27%2C%7BAttendance%7D%3D%27Attended%27%29`;
  const fields =
    '&fields=Date%20Reported&fields=Level%20at%20submission%20&fields=Current%20Story%20Point';
  const url =
    AIRTABLE_ENDPOINT + STUDENT_TRACKING_AIR_TABLE_ID + filter + fields;
  // const allRecs = await getAllRecs(url, 5);
  const allRecs = createDatePoints(theStudent.startDt, 250, 480);

  console.table(allRecs);

  // Re-Map field names
  const reMappedFields = allRecs.map((obj) => ({
    dt: obj['Date Reported'],
    lvl: obj['Level at submission '],
    pts: obj['Current Story Point'],
  }));

  // Sort Data (recent date / high pts first) so that it can be use in Merge below
  const revSortedProgress = reMappedFields
    .slice()
    .sort((a, b) =>
      a.dt > b.dt
        ? -1
        : a.dt < b.dt
        ? 1
        : a.pts > b.pts
        ? -1
        : a.pts < b.pts
        ? 1
        : 0,
    );

  const genAllDates = (st, end, arr = []) =>
    st <= end
      ? genAllDates(DateTime.fromISO(st).plus({ days: 1 }).toISODate(), end, [
          ...arr,
          { dt: st },
        ])
      : arr;
  const allDates = genAllDates(theStudent.startDt, theStudent.endDt);

  // Merge (revSortedProgress) array with Student Progress Data into (allDates)
  const mergedArr = allDates.map((obj, i, arr) => ({
    ...obj,
    pts: revSortedProgress.find((x) => x.dt === obj.dt)?.pts ?? null,
  }));

  // Calculate Baseline Goal Points
  const totalDays = DateTime.fromISO(theStudent.endDt).diff(
    DateTime.fromISO(theStudent.startDt),
    'days',
  ).days;
  const addGoal = mergedArr.map((obj, i) => ({
    ...obj,
    goal: calcGoalPts(theStudent.courseTotPts, i, totalDays),
  }));

  // Add studenName to first element of array
  const addStudenName = JSON.parse(JSON.stringify(addGoal));
  if (addStudenName[0]) addStudenName[0].studentName = theStudent.studentName;

  return res.status(201).json(addStudenName);
}
