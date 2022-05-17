import { useTheContext } from '../hocs/context-provider';

export default function Home() {
  const { studentProgress, allStudents, selectedStudent } = useTheContext();
  return (
    <>
      {/* <div>{studentProgress.length}</div>
      {studentProgress?.map((obj) => (
        <div key={obj.dt}>
          {obj.dt}, {obj.pts}
        </div>
      ))} */}
      <br />
      {selectedStudent?.studentName}
    </>
  );
}
