import { getSession } from 'next-auth/react';
import { getAllRecs } from '../../helpers/get-all-records';
import { DateTime } from 'luxon';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ errMsg: 'Not Authenticated' });

  const { AIRTABLE_ENDPOINT, STUDENT_RECORDS_AIR_TABLE_ID } = process.env;
  const filter = '?view=In_progress';

  let fields = '&fields=RecordID';
  fields += '&fields=Student%20Name';
  fields += '&fields=Course%20Start%20Date';
  fields += '&fields=Planned%20End%20Date';
  fields += '&fields=Student%20Status';
  fields += '&fields=SSM';
  fields += '&fields=Course%20Subject';
  fields += '&fields=Current%20Level';

  const url =
    AIRTABLE_ENDPOINT + STUDENT_RECORDS_AIR_TABLE_ID + filter + fields;
  const allRecs = await getAllRecs(url, 5);

  // Transform Data
  const reMappedFields = allRecs.map((obj) => ({
    studentId: obj.RecordID,
    studentName: obj['Student Name'],
    startDt: obj['Course Start Date'],
    endDt: obj['Planned End Date']
      ? obj['Planned End Date']
      : DateTime.fromISO(obj['Course Start Date'])
          .toUTC()
          .plus({ days: 250 })
          .toISODate(),
    status: obj['Student Status'],
    ssm: obj['SSM'],
    courseSubject: obj['Course Subject'],
    currentLevel: obj['Current Level'],
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

  return res.status(201).json(withSelectStudent);
}
