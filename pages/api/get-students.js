import { getSession } from '@auth0/nextjs-auth0';
import { getAllRecs } from '../../helpers/get-all-records';
import { DateTime } from 'luxon';

const sampleStudents = [
  {
    'Student Name': 'Ocean Ferrell',
    'Course Subject': 'FSJS',
    'Course Start Date': '2022-01-01',
    'Current Level': 4,
    'Student Status': 'In progress',
    SSM: 'Jonas Wilder',
    RecordID: 'random-student-id-1',
  },
  {
    'Student Name': 'Lewis Traynor',
    'Course Subject': 'FSJS',
    'Course Start Date': '2022-02-01',
    'Current Level': 3,
    'Student Status': 'In progress',
    SSM: 'Makayla Hartman',
    RecordID: 'random-student-id-2',
  },
  {
    'Student Name': 'Haydon Haley',
    'Course Subject': 'XD',
    'Course Start Date': '2022-03-01',
    'Current Level': 2,
    'Student Status': 'In progress',
    SSM: 'Jonas Wilder',
    RecordID: 'random-student-id-3',
  },
  {
    'Student Name': 'Evalyn Gibbons',
    'Course Subject': 'FSJS',
    'Course Start Date': '2022-04-01',
    'Current Level': 1,
    'Student Status': 'In progress',
    SSM: 'Makayla Hartman',
    RecordID: 'random-student-id-4',
  },
];

export default async function handler(req, res) {
  // const session = getSession(req, res);
  // if (!session) return res.status(201).json([{test: 'test'}]);

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
  // const allRecs = await getAllRecs(url, 5);
  const allRecs = JSON.parse(JSON.stringify(sampleStudents));

  // Transform Data
  const reMappedFields = allRecs.map((obj) => ({
    studentId: obj.RecordID,
    studentName: obj['Student Name'],
    startDt: obj['Course Start Date'],
    // TODO Get DEFAULT_COURSE_LENGTH from staff at V School
    endDt: obj['Planned End Date']
      ? obj['Planned End Date']
      : DateTime.fromISO(obj['Course Start Date'])
          .toUTC()
          .plus({ days: process.env.DEFAULT_COURSE_LENGTH })
          .toISODate(),
    status: obj['Student Status'],
    ssm: obj['SSM'],
    currentLevel: obj['Current Level'],
    courseSubject: obj['Course Subject'],
    // TODO Get courseTotPts from the Airtable Student Record Table
    courseTotPts: 480,
  }));

  // Sort Data
  const sortedStudents = reMappedFields
    .slice()
    .sort((a, b) =>
      a.studentName.toUpperCase() > b.studentName.toUpperCase() ? 1 : -1,
    );

  // Add "--- Select Student ---"" as first element of array
  const withSelectStudent = [
    { studentId: 'placeholder', studentName: '--- Select Student ---' },
    ...sortedStudents,
  ];

  console.log('withSelectStudent', withSelectStudent);

  return res.status(201).json(withSelectStudent);
}
