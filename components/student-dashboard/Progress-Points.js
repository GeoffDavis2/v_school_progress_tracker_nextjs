import { useTheContext } from '../../hocs/context-provider';
import styles from './styles.module.css';

export const ProgressPoints = () => {
  const { studentProgress } = useTheContext();
  // TODO Find better way to clone, just want to ensure it doesn't mutate the original array
  // TODO Use lodash (_.cloneDeep) instead of JSON.stringify
  // TODO ... or just use map???
  const lastEntry = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts);
  const delta = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(lastEntry?.pts - lastEntry?.goal);

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
