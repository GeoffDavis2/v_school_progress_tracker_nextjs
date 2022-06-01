import { useTheContext } from '../../hocs/context-provider';
import styles from './styles.module.css';

export const ProgressPoints = () => {
  const { studentProgress } = useTheContext();
  // TODO Use lodash (_.cloneDeep) instead of JSON.stringify
  let currPts = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts).pts;

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>Current Progress Points</div>
      <div>
        <span className={styles.big_value_font}>{currPts}</span>
        <span className={styles.sm_unit_font}> pts</span>
      </div>
      <div>
        <span>+ x pts</span> Compared to goal
      </div>
    </div>
  );
};
