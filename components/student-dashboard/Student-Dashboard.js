import { useTheContext } from '../../hocs/context-provider';
import { StudentInfo } from './Student-Info';
import { ProgressPoints } from './Progress-Points';
import { EndDate } from './End-Date';
import { DailyPace } from './Daily-Pace';
import { DaysInLevel } from './Days-In-Level';
import { ProgressGraph } from '../Progress-Graph';
import { CareerPrep } from './Career-Prep';
import { ProgressGrid } from '../Progress-Grid';
import styles from './styles.module.css';

export const StudentDashboard = () => {
  const { studentProgress } = useTheContext();

  if (studentProgress.length < 1) return <h1>No Data</h1>;

  return (
    <div className={styles.container}>
      <StudentInfo />
      <div
        className={styles.sub_component}
        style={{ gridArea: '1 / 3 / 3 / 5' }}
      >
        <ProgressGraph />
      </div>
      <ProgressPoints />
      <EndDate />
      <DailyPace />
      <DaysInLevel />
      <CareerPrep />
      <div className={styles.sub_component} style={{ gridColumn: '1 / 5' }}>
        <ProgressGrid />
      </div>
    </div>
  );
};
