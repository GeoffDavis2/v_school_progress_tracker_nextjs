import { getSession } from 'next-auth/react';
import { useTheContext } from '../hocs/context-provider';

export default function Home() {
  const { studentProgress, selectedStudent } = useTheContext();
  return (
    <>
      <h1>Progress Data for: {selectedStudent?.studentName}</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {studentProgress?.map((obj) => (
            <tr key={obj.dt}>
              <td>{obj.dt}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>{obj.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
