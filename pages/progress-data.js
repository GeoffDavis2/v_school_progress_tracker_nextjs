import { useTheContext } from '../hocs/context-provider';

export default function Home() {
  const { studentProgress } = useTheContext();
  console.log(studentProgress[1]?.dt);
  return (
    <>
      <div>{studentProgress.length}</div>
      {studentProgress?.map((obj) => (
        <div key={obj.dt}>
          {obj.dt}, {obj.pts}
        </div>
      ))}
    </>
  );
}
