import { getAllRecs } from './get-all-records';
import { yyyymmdd, newOffsetDt } from './my-date-functions';

export async function getAllStudents() {
  // Load Student Data from Airtable
  const airTableEndpoint = 'https://api.airtable.com/v0/appg2CeX4DA9Y7hDi/';
  const studentRecordsAirTableId = 'tblqcf7IvD0uXCms9?';
  const filter = '?view=In_progress';
  const fields =
    '&fields=RecordID&fields=Student%20Name&fields=Course%20Start%20Date';
  const url = airTableEndpoint + studentRecordsAirTableId + filter + fields;
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

  return withSelectStudent;
}
