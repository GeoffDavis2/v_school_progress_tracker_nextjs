// import { getSession } from 'next-auth/react';
import { ProgressGraph } from '../components/Progress-Graph';

export default function ProgressCharts() {
  return <ProgressGraph />;
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
