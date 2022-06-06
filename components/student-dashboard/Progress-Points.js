import { useTheContext } from '../../hocs/context-provider';
import { DateTime } from 'luxon';
import styles from './styles.module.css';

export const ProgressPoints = () => {
  const { selectedStudent, studentProgress } = useTheContext();

  const lastEntry = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts);
  const goalForToday =
    studentProgress.find((obj) => obj.dt === DateTime.now().toISODate())
      ?.goal || selectedStudent.courseTotPts;
  const delta = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(lastEntry?.pts - goalForToday);

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>Current Progress Points</div>
      <div>
        <span className={styles.big_value_font}>{lastEntry?.pts}</span>
        <span className={styles.sm_unit_font}> pts</span>
      </div>
      <div>
        <span style={{ color: delta < 0 ? '#C92A2A' : '#008566' }}>
          {delta} pts
        </span>{' '}
        Compared to goal
      </div>
    </div>
  );
};
