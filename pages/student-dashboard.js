import { useTheContext } from '../hocs/context-provider';
import { StudentInfo } from '../components/student-dashboard/Student-Info';
import { ProgressPoints } from '../components/student-dashboard/Progress-Points';
import { EndDate } from '../components/student-dashboard/End-Date';
import { DailyPace } from '../components/student-dashboard/Daily-Pace';
import { DaysInLevel } from '../components/student-dashboard/Days-In-Level';
import { ProgressGraph } from '../components/student-dashboard/Progress-Graph';
import { CareerPrep } from '../components/student-dashboard/Career-Prep';
import { ProgressData } from '../components/student-dashboard/Progress-Data';
import styles from '../components/student-dashboard/styles.module.css';

export default function StudentDashboard() {
  const { studentProgress } = useTheContext();

  if (studentProgress.length < 1) return <h1>No Data</h1>;

  return (
    <div className={styles.container}>
      <StudentInfo />
      <ProgressGraph />
      <ProgressPoints />
      <EndDate />
      <DailyPace />
      <DaysInLevel />
      <CareerPrep />
      <ProgressData />
    </div>
  );
}
