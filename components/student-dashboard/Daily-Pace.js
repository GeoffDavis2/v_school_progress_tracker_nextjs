import styles from './styles.module.css';

export const DailyPace = () => {
  return (
    <div className={styles.sub_component}>
      <div className={styles.label_font}>Average Daily Pace</div>
      <div>
        <span className={styles.big_value_font}>x.x</span>
        <span className={styles.sm_unit_font}> pts</span>
      </div>
      <div>
        <span>+ x pts</span> Compared to goal
      </div>
    </div>
  );
};
