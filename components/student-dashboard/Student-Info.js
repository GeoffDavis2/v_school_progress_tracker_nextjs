import { useTheContext } from '../../hocs/context-provider';
import styles from './styles.module.css';

export const Pace = () => {
  // TODO Add logic to calculate pace
  return (
    <div
      style={{
        backgroundColor: '#D9ECE8',
        border: '1px solid #D8D4CF',
        borderRadius: '8px',
        padding: '6px 12px',
        fontSize: '.75rem',
        fontWeight: '0700',
      }}
    >
      ON TRACK
    </div>
  );
};

export const StudentInfo = () => {
  const { selectedStudent } = useTheContext();
  const studentInfoLabel = { fontSize: '.75rem', fontWeight: '700' };

  return (
    <div className={styles.sub_component} style={{ gridArea: '1 / 1 / 2 / 3' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>
          {selectedStudent.studentName}
        </div>
        <Pace />
      </div>
      <div>SSM: {selectedStudent.ssm}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <div>
          <div style={studentInfoLabel}>Program</div>
          <div>{selectedStudent.courseSubject}</div>
        </div>
        <div>
          <div style={studentInfoLabel}>Start Date</div>
          <div>{selectedStudent.startDt}</div>
        </div>
        <div>
          <div style={studentInfoLabel}>Current Level</div>
          <div>{selectedStudent.currentLevel}</div>
        </div>
      </div>
    </div>
  );
};
