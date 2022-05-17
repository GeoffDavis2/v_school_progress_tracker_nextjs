const { AIRTABLE_ENDPOINT, STUDENT_RECORDS_AIR_TABLE_ID } = process.env;

import { getAllRecs } from '../../helpers/get-all-records';
import { yyyymmdd, newOffsetDt } from '../../helpers/my-date-functions';

export default async function handler(req, res) {
  const filter = '?view=In_progress';
  const fields =
    '&fields=RecordID&fields=Student%20Name&fields=Course%20Start%20Date';

  const url =
    AIRTABLE_ENDPOINT + STUDENT_RECORDS_AIR_TABLE_ID + filter + fields;
  const allRecs = await getAllRecs(url, 5);

  // Transform Data
  const reMappedFields = allRecs.map((obj) => ({
    studentId: obj.RecordID,
    studentName: obj['Student Name'],
    startDt: obj['Course Start Date'],
    endDt: yyyymmdd(newOffsetDt(obj['Course Start Date'], 250)), // TODO add End Date field to Airtable "Student Record" table instead of calculating it here
  }));

  // Sort Data
  const sortedStudents = reMappedFields
    .slice()
    .sort((a, b) =>
      a.studentName.toUpperCase() > b.studentName.toUpperCase() ? 1 : -1,
    );

  // Add "--- Select Student ---"" as first element of array
  const withSelectStudent = [
    { studentId: '', studentName: '--- Select Student ---' },
    ...sortedStudents,
  ];

  // res.status(201).json(allRecs);
  res.status(201).json(withSelectStudent);
}
