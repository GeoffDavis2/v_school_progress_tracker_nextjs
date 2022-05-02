import { yyyymmdd, newOffsetDt } from './my-date-functions';

export async function getAllStudents() {
  // Load Student Data from Airtable
  const allRecs = await (await fetch('/api/students')).json();

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

  return withSelectStudent;
}
