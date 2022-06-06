import { useTheContext } from '../../hocs/context-provider';
import styles from './styles.module.css';

export const DaysInLevel = () => {
  const { studentProgress } = useTheContext();
  // TODO Use lodash (_.cloneDeep) instead of JSON.stringify
  let currPts = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts)?.dt;

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>Days in Level</div>
      <div>
        <span className={styles.big_value_font}>xx</span>
        <span className={styles.sm_unit_font}> days</span>
      </div>
      <div>
        <span>+ xx%</span> Percentage of Level
      </div>
      <div style={{ backgroundColor: 'yellow', textAlign: 'center' }}>
        ... no way to know this ...
      </div>
    </div>
  );
};
