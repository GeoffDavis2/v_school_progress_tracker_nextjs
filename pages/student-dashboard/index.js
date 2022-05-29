import { useTheContext } from '../../hocs/context-provider';
import { StudentInfo } from './Student-Info';
// import { ProgressPoints } from './Progress-Points';
// import { EndDate } from './End-Date';
// import { DailyPace } from './Daily-Pace';
// import { DaysInLevel } from './Days-In-Level';
// import { ProgressGraph } from './Progress-Graph';
// import { CareerPrep } from '../../components/temp/Career-Prep';
// import { ProgressData } from './Progress-Data';

export default function StudentDashboard() {
  const { studentProgress } = useTheContext();

  if (studentProgress.length < 1) return <h1>No Data</h1>;

  return (
    <div className="student_dashboard_grid_container">
      <StudentInfo />
      {/* <ProgressGraph /> */}
      {/* <ProgressPoints /> */}
      {/* <EndDate /> */}
      {/* <DailyPace /> */}
      {/* <DaysInLevel /> */}
      {/* <CareerPrep /> */}
      {/* <ProgressData /> */}
    </div>
  );
}
