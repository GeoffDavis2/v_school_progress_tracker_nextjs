// import { getSession } from 'next-auth/react';
import { getAllRecs } from '../../helpers/get-all-records';
import { DateTime } from 'luxon';



const sampleStudentData = [
  { 'Date Reported': '2022-01-11', 'Current Story Point': 258 },
  { 'Date Reported': '2021-11-23', 'Current Story Point': 169.5 },
  { 'Date Reported': '2021-10-21', 'Current Story Point': 97.5 },
  { 'Date Reported': '2022-04-25', 'Current Story Point': 434 },
  { 'Date Reported': '2022-03-04', 'Current Story Point': 345 },
  { 'Date Reported': '2021-10-15', 'Current Story Point': 67 },
  { 'Date Reported': '2021-10-14', 'Current Story Point': 66.5 },
  { 'Date Reported': '2022-01-14', 'Current Story Point': 268 },
  { 'Date Reported': '2022-03-23', 'Current Story Point': 392 },
  { 'Date Reported': '2022-03-17', 'Current Story Point': 392 },
  { 'Date Reported': '2022-02-17', 'Current Story Point': 312.5 },
  { 'Date Reported': '2022-03-08', 'Current Story Point': 351 },
  { 'Date Reported': '2021-10-11', 'Current Story Point': 51 },
  { 'Date Reported': '2022-02-18', 'Current Story Point': 329 },
  { 'Date Reported': '2021-11-04', 'Current Story Point': 128 },
  { 'Date Reported': '2021-10-20', 'Current Story Point': 73 },
  { 'Date Reported': '2022-03-28', 'Current Story Point': 392 },
  { 'Date Reported': '2022-03-09', 'Current Story Point': 353.5 },
  { 'Date Reported': '2021-11-10', 'Current Story Point': 150.5 },
  { 'Date Reported': '2022-03-02', 'Current Story Point': 343 },
  { 'Date Reported': '2022-02-22', 'Current Story Point': 332 },
  { 'Date Reported': '2022-04-12', 'Current Story Point': 409.75 },
  { 'Date Reported': '2021-12-14', 'Current Story Point': 236.5 },
  { 'Date Reported': '2021-09-29', 'Current Story Point': 25.5 },
  { 'Date Reported': '2021-10-29', 'Current Story Point': 103.5 },
  { 'Date Reported': '2022-02-04', 'Current Story Point': 312.5 },
  { 'Date Reported': '2021-10-22', 'Current Story Point': 97.5 },
  { 'Date Reported': '2022-02-11', 'Current Story Point': 312.5 },
  { 'Date Reported': '2022-05-06', 'Current Story Point': 465.75 },
  { 'Date Reported': '2021-11-09', 'Current Story Point': 150 },
  { 'Date Reported': '2022-04-15', 'Current Story Point': 409.8 },
  { 'Date Reported': '2021-09-30', 'Current Story Point': 26.5 },
  { 'Date Reported': '2021-10-19', 'Current Story Point': 71.5 },
  { 'Date Reported': '2022-03-01', 'Current Story Point': 343 },
  { 'Date Reported': '2022-01-28', 'Current Story Point': 304 },
  { 'Date Reported': '2022-01-17', 'Current Story Point': 273 },
  { 'Date Reported': '2021-10-26', 'Current Story Point': 97.5 },
  { 'Date Reported': '2022-03-30', 'Current Story Point': 392 },
  { 'Date Reported': '2021-11-03', 'Current Story Point': 125.5 },
  {
    'Date Reported': '2021-12-01',
    'Current Story Point': 200,
    'Level at submission ': 3,
  },
  { 'Date Reported': '2022-04-11', 'Current Story Point': 404.25 },
  { 'Date Reported': '2022-01-10', 'Current Story Point': 258 },
  { 'Date Reported': '2022-03-29', 'Current Story Point': 392 },
  { 'Date Reported': '2022-03-15', 'Current Story Point': 392 },
  { 'Date Reported': '2021-11-08', 'Current Story Point': 148 },
  { 'Date Reported': '2022-04-06', 'Current Story Point': 402.5 },
  { 'Date Reported': '2021-11-02', 'Current Story Point': 118 },
  { 'Date Reported': '2022-03-10', 'Current Story Point': 355.5 },
  { 'Date Reported': '2021-12-06', 'Current Story Point': 211 },
  { 'Date Reported': '2021-12-10', 'Current Story Point': 232.5 },
  { 'Date Reported': '2021-11-30', 'Current Story Point': 193 },
  { 'Date Reported': '2022-03-16', 'Current Story Point': 392 },
  { 'Date Reported': '2022-05-03', 'Current Story Point': 465.8 },
  { 'Date Reported': '2022-01-16', 'Current Story Point': 269 },
  { 'Date Reported': '2022-03-14', 'Current Story Point': 392 },
  { 'Date Reported': '2021-10-04', 'Current Story Point': 32 },
  { 'Date Reported': '2022-01-21', 'Current Story Point': 282 },
  { 'Date Reported': '2022-01-05', 'Current Story Point': 258 },
  { 'Date Reported': '2022-03-21', 'Current Story Point': 392 },
  { 'Date Reported': '2021-11-11', 'Current Story Point': 155 },
  { 'Date Reported': '2022-02-08', 'Current Story Point': 312.5 },
  { 'Date Reported': '2022-04-20', 'Current Story Point': 412.25 },
  { 'Date Reported': '2022-01-26', 'Current Story Point': 288 },
  { 'Date Reported': '2022-04-21', 'Current Story Point': 413 },
  { 'Date Reported': '2022-01-04', 'Current Story Point': 258 },
  { 'Date Reported': '2021-12-07', 'Current Story Point': 218 },
  { 'Date Reported': '2022-04-27', 'Current Story Point': 465.8 },
  { 'Date Reported': '2021-12-09', 'Current Story Point': 230.5 },
  { 'Date Reported': '2021-12-16', 'Current Story Point': 247.5 },
  { 'Date Reported': '2021-11-12', 'Current Story Point': 157 },
  { 'Date Reported': '2022-05-04', 'Current Story Point': 465.75 },
  { 'Date Reported': '2021-11-22', 'Current Story Point': 169.5 },
  { 'Date Reported': '2022-02-09', 'Current Story Point': 312.5 },
  { 'Date Reported': '2021-11-18', 'Current Story Point': 169.5 },
  { 'Date Reported': '2021-10-27', 'Current Story Point': 97.5 },
  { 'Date Reported': '2022-02-23', 'Current Story Point': 335 },
  { 'Date Reported': '2021-12-08', 'Current Story Point': 228.5 },
  {
    'Date Reported': '2022-02-01',
    'Current Story Point': 306.5,
    'Level at submission ': 4,
  },
  {
    'Date Reported': '2022-03-01',
    'Current Story Point': 337,
    'Level at submission ': 5,
  },
  { 'Date Reported': '2022-01-20', 'Current Story Point': 281 },
  { 'Date Reported': '2022-01-24', 'Current Story Point': 284 },
  { 'Date Reported': '2021-12-15', 'Current Story Point': 247.5 },
  { 'Date Reported': '2021-10-07', 'Current Story Point': 43.5 },
  { 'Date Reported': '2021-09-27', 'Current Story Point': 17.5 },
  {
    'Date Reported': '2021-10-01',
    'Current Story Point': 30,
    'Level at submission ': 1,
  },
  { 'Date Reported': '2021-11-24', 'Current Story Point': 178 },
  { 'Date Reported': '2021-11-19', 'Current Story Point': 169.5 },
  { 'Date Reported': '2021-09-28', 'Current Story Point': 22.5 },
  { 'Date Reported': '2021-09-24', 'Current Story Point': 16.5 },
  { 'Date Reported': '2022-05-11', 'Current Story Point': 469.75 },
  { 'Date Reported': '2022-01-06', 'Current Story Point': 258 },
  { 'Date Reported': '2022-02-25', 'Current Story Point': 330 },
  { 'Date Reported': '2022-02-16', 'Current Story Point': 312.5 },
  { 'Date Reported': '2021-10-18', 'Current Story Point': 69 },
  { 'Date Reported': '2022-04-08', 'Current Story Point': 402.75 },
  { 'Date Reported': '2022-01-12', 'Current Story Point': 258 },
  { 'Date Reported': '2021-10-08', 'Current Story Point': 51 },
  { 'Date Reported': '2022-03-07', 'Current Story Point': 345 },
  { 'Date Reported': '2022-04-22', 'Current Story Point': 433.75 },
  { 'Date Reported': '2021-11-16', 'Current Story Point': 163 },
  { 'Date Reported': '2021-12-20', 'Current Story Point': 258 },
  { 'Date Reported': '2021-10-25', 'Current Story Point': 97.5 },
  { 'Date Reported': '2021-11-05', 'Current Story Point': 129.5 },
  { 'Date Reported': '2021-10-12', 'Current Story Point': 52 },
  { 'Date Reported': '2021-11-01', 'Current Story Point': 108.5 },
  { 'Date Reported': '2022-01-07', 'Current Story Point': 258 },
  { 'Date Reported': '2022-05-13', 'Current Story Point': 470.25 },
  { 'Date Reported': '2021-12-02', 'Current Story Point': 204 },
  { 'Date Reported': '2021-12-17', 'Current Story Point': 253.5 },
  { 'Date Reported': '2022-02-14', 'Current Story Point': 312.5 },
  { 'Date Reported': '2022-01-27', 'Current Story Point': 288 },
  { 'Date Reported': '2022-05-10', 'Current Story Point': 465.8 },
  { 'Date Reported': '2021-12-13', 'Current Story Point': 236.5 },
  { 'Date Reported': '2022-04-29', 'Current Story Point': 465.8 },
  { 'Date Reported': '2022-02-03', 'Current Story Point': 312.5 },
  { 'Date Reported': '2021-10-28', 'Current Story Point': 100 },
  { 'Date Reported': '2022-01-18', 'Current Story Point': 275 },
  { 'Date Reported': '2022-04-13', 'Current Story Point': 409.8 },
  { 'Date Reported': '2021-10-05', 'Current Story Point': 33.5 },
  { 'Date Reported': '2022-02-02', 'Current Story Point': 312.5 },
  { 'Date Reported': '2021-10-06', 'Current Story Point': 34.5 },
  { 'Date Reported': '2022-01-19', 'Current Story Point': 278 },
  { 'Date Reported': '2022-02-10', 'Current Story Point': 312.5 },
  { 'Date Reported': '2022-04-05', 'Current Story Point': 396 },
  { 'Date Reported': '2021-12-03', 'Current Story Point': 206.5 },
  { 'Date Reported': '2021-11-29', 'Current Story Point': 184 },
  { 'Date Reported': '2021-11-15', 'Current Story Point': 160 },
  { 'Date Reported': '2022-01-13', 'Current Story Point': 258 },
  { 'Date Reported': '2021-09-23', 'Current Story Point': 9 },
  { 'Date Reported': '2022-03-22', 'Current Story Point': 392 },
  { 'Date Reported': '2022-04-18', 'Current Story Point': 410.8 },
];

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
  const allRecs = await getAllRecs(url, 5);
  // const allRecs = JSON.parse(JSON.stringify(sampleStudents));

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
