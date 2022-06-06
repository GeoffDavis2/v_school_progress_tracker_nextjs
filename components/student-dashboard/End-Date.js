import { useTheContext } from '../../hocs/context-provider';
import { DateTime } from 'luxon';
import styles from './styles.module.css';

export const EndDate = () => {
  const { selectedStudent, studentProgress } = useTheContext();

  const currPts = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts)?.pts;
  const dayOfGoalPts = studentProgress.find((obj) => obj.goal >= currPts)?.dt;

  const delta = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(
    Math.round(
      DateTime.fromISO(dayOfGoalPts).diff(DateTime.now(), 'days').days,
    ),
  );

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>End Date Goal</div>
      <div className={styles.big_value_font}>
        {DateTime.fromISO(selectedStudent?.endDt).toLocaleString()}
      </div>
      <div>
        <span style={{ color: delta < 0 ? '#C92A2A' : '#008566' }}>
          {delta}
        </span>{' '}
        Days {delta >= 0 ? 'ahead of' : 'behind'} goal
      </div>
    </div>
  );
};
