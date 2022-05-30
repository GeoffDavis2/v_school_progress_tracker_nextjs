// components/Layout.js
// function Layout(props) {
//   return (
//     <div className="page-layout">
//       {props.children}
//       <style jsx global>{`
//         body {
//           margin: 0;
//           padding: 0;
//           font-size: 18px;
//           font-weight: 400;
//           line-height: 1.8;
//           color: #333;
//           font-family: sans-serif;
//         }
//         h1 {
//           font-weight: 700;
//         }
//         p {
//           margin-bottom: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }



import Head from 'next/head';
import { Navbar } from '../components/navbar';
import { SelectStudent } from '../components/select-student';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>V School Progress Tracker</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <SelectStudent />
        {children}
        <footer>
          <h1>Footer Info Here...</h1>
        </footer>
      </main>
    </>
  );
};

export default Layout;
