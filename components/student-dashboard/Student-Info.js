import { useTheContext } from '../../hocs/context-provider';
import { DateTime } from 'luxon';
import styles from './styles.module.css';

export const Pace = () => {
  const { studentProgress } = useTheContext();

  const lastEntry = JSON.parse(JSON.stringify(studentProgress))
    .reverse()
    .find((obj) => obj.pts);
  const goalForToday = studentProgress.find(
    (obj) => obj.dt === DateTime.now().toISODate(),
  )?.goal;
  const delta = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(lastEntry?.pts - goalForToday);

  return (
    <div
      style={{
        backgroundColor: delta >= 0 ? '#D9ECE8' : 'pink',
        borderStyle: 'solid',
        borderRadius: '8px',
        borderColor: delta >= 0 ? '#008566' : 'red',
        padding: '6px 12px',
        fontSize: '.75rem',
        fontWeight: '0700',
      }}
    >
      {delta >= 0 ? 'ON' : 'OFF'} TRACK
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
          {selectedStudent?.studentName}
        </div>
        <Pace />
      </div>
      <div>SSM: {selectedStudent?.ssm}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <div>
          <div style={studentInfoLabel}>Program</div>
          <div>{selectedStudent?.courseSubject}</div>
        </div>
        <div>
          <div style={studentInfoLabel}>Start Date</div>
          <div>{selectedStudent?.startDt}</div>
        </div>
        <div>
          <div style={studentInfoLabel}>Current Level</div>
          <div>{selectedStudent?.currentLevel}</div>
        </div>
      </div>
    </div>
  );
};
