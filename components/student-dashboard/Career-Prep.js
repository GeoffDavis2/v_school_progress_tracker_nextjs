import styles from './styles.module.css';

export const CareerPrep = () => {
  return (
    <div className={styles.sub_component} style={{ gridArea: '3 / 3 / 4 / 5' }}>
      <div className={styles.label_font}>Career Prep Progress</div>
      <div className={styles.big_value_font}>Comming Soon</div>
    </div>
  );
};
