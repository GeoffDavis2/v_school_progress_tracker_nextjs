import { useTheContext } from '../../hocs/context-provider';
import { DateTime } from 'luxon';
import styles from './styles.module.css';

export const DailyPace = () => {
  const { selectedStudent, studentProgress } = useTheContext();

  const lastEntry = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts);
  const daysLeft = Math.round(
    DateTime.fromISO(selectedStudent?.endDt).diff(DateTime.now(), 'days').days,
  );
  const reqPerDay =
    Math.round(
      ((selectedStudent?.courseTotPts - lastEntry?.pts) * 100) / daysLeft,
    ) / 100;
  const delta = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(
    Math.round(
      (reqPerDay - selectedStudent?.courseTotPts / studentProgress?.length) *
        100,
    ) / 100,
  );

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>Required Daily Pace</div>
      <div>
        <span className={styles.big_value_font}>{reqPerDay.toString()}</span>
        <span className={styles.sm_unit_font}> pts</span>
      </div>
      <div>
        <span style={{ color: delta > 0 ? '#C92A2A' : '#008566' }}>
          {delta} pts
        </span>{' '}
        Compared to goal
      </div>
    </div>
  );
};
