import { getSession } from '@auth0/nextjs-auth0';
import { getAllRecs } from '../../helpers/get-all-records';
import faker from 'faker';
import { DateTime } from 'luxon';

// TODO Move this to a helper file
function genSampleStudents(numStudents) {
  const ssmCt = 5;
  const ssms = [];
  for (let i = 1; i <= ssmCt; i++) {
    ssms.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
  }

  const courses = ['FSJS', 'XD'];

  const studentArray = [];
  for (let i = 1; i <= numStudents; i++) {
    studentArray.push({
      RecordID: `RecordID-${i}`,
      'Student Name': `${faker.name.firstName()} ${faker.name.lastName()}`,
      'Course Subject': courses[Math.floor(Math.random() * courses.length)],
      'Course Start Date': DateTime.now()
        .minus({ days: faker.datatype.number({ min: 2, max: 250 }) })
        .toISODate(),
      'Current Level': faker.datatype.number({ min: 1, max: 6 }),
      'Student Status': 'In progress',
      SSM: ssms[faker.datatype.number({ min: 0, max: ssmCt - 1 })],
    });
  }
  return studentArray;
}

export default async function handler(req, res) {
  const session = getSession(req, res);

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

  const allRecs =
    session && session?.user?.email_verified
      ? await getAllRecs(url, 5)
      : genSampleStudents(5);

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

  return res.status(201).json(withSelectStudent);
}
