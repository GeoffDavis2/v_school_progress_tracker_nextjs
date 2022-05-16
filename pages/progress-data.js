import { useTheContext } from '../hocs/context-provider';

export default function Home() {
  const { studentProgress, allStudents, selectedStudent } = useTheContext();
  console.log(selectedStudent);
  console.log(allStudents[0]);
  console.log(studentProgress[1]?.dt);
  return (
    <>
      {/* <div>{studentProgress.length}</div>
      {studentProgress?.map((obj) => (
        <div key={obj.dt}>
          {obj.dt}, {obj.pts}
        </div>
      ))} */}
      {allStudents[1]?.studentName}
      <br />
      {selectedStudent?.studentName}
    </>
  );
}
