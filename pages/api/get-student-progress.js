// const { AIRTABLE_ENDPOINT, STUDENT_RECORDS_AIR_TABLE_ID } = process.env;

import { getAllRecs } from '../../helpers/get-all-records';
import { yyyymmdd, newOffsetDt } from '../../helpers/my-date-functions';

export default async function handler(req, res) {
  const theStudent = JSON.parse(req.body);

  const filter = `&filterByFormula=AND%28%7BStudentRecordID%7D%3D%27${theStudent.studentId}%27%2C%7BAttendance%7D%3D%27Attended%27%29`;
  const fields =
    '&fields=Date%20Reported&fields=Level%20at%20submission%20&fields=Current%20Story%20Point';
  // TODO put this in .env.local
  const AIRTABLE_ENDPOINT = 'https://api.airtable.com/v0/appg2CeX4DA9Y7hDi/';
  const STUDENT_TRACKING_AIR_TABLE_ID = 'tblQXrG1bxTHju526?';
  const url =
    AIRTABLE_ENDPOINT + STUDENT_TRACKING_AIR_TABLE_ID + filter + fields;
  const allRecs = await getAllRecs(url, 5);

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

  // Generate array (allDates) with all dates between (theStudent.startDt and theStudent.endDt)
  const genAllDates = (st, end, arr = []) =>
    st <= end
      ? genAllDates(newOffsetDt(st, 1), end, [...arr, { dt: yyyymmdd(st) }])
      : arr;
  const allDates = genAllDates(
    new Date(theStudent.startDt),
    new Date(theStudent.endDt),
  );

  // Merge (revSortedProgress) array with Student Progress Data into (allDates)
  const mergedArr = allDates.map((obj, i, arr) => ({
    ...obj,
    pts: revSortedProgress.find((x) => x.dt === obj.dt)?.pts ?? null,
  }));

  // Add studenName to first element of array
  const addStudenName = JSON.parse(JSON.stringify(mergedArr));
  if (addStudenName[0]) addStudenName[0].studentName = theStudent.studentName;

  // res.status(201).json(addStudenName);
  res.status(201).json(addStudenName);
}
