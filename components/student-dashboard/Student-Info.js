import { useTheContext } from '../../hocs/context-provider';
import styles from './styles.module.css';

export const StudentInfo = () => {
  const { selectedStudent } = useTheContext();

  return (
    <div className={styles.sub_component} style={{ gridArea: '1 / 1 / 2 / 3' }}>
      {selectedStudent.studentName}
    </div>
  );
};
