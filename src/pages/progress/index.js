import { getStudentProgress } from '../../helpers/get-student-progress';
import { ProgressChart } from '../../components/ProgressChart';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function Progress({ studentProgress }) {
  return <ProgressChart studentProgress={studentProgress} />;
}

export async function getServerSideProps() {
  const tempStudent = {
    studentId: 'recwL3bM4YC1AeYVq',
    studentName: 'Geoffrey Davis - FSJS',
    startDt: '2021-08-10',
    endDt: '2022-04-17',
  };

  const allRecs = await getStudentProgress(tempStudent);

  return {
    props: {
      studentProgress: allRecs,
    },
  };
}
