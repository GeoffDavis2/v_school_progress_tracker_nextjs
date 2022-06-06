import { useTheContext } from '../../hocs/context-provider';
import { DateTime } from 'luxon';
import styles from './styles.module.css';

export const EndDate = () => {
  const { selectedStudent } = useTheContext();

  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>End Date Goal</div>
      <div className={styles.big_value_font}>
        {DateTime.fromISO(selectedStudent?.endDt).toLocaleString()}
      </div>
      <div>
        <span>- xx</span> Days (ahead/behind) goal
      </div>
      <div style={{ backgroundColor: 'yellow', textAlign: 'center' }}>
        ??? not sure about this ???
      </div>
    </div>
  );
};
