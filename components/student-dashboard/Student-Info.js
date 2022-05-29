import { useTheContext } from '../../hocs/context-provider';

export const StudentInfo = () => {
  const { selectedStudent } = useTheContext();

  return (
    <div
      className="student_dashboard_component"
      style={{ gridArea: '1 / 1 / 2 / 3' }}
    >
      {selectedStudent.studentName}
    </div>
  );
};
