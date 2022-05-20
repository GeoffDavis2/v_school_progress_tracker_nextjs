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
        {/* <SelectStudent />
        {children} */}
        <footer>
          <h1>Footer Info Here...</h1>
        </footer>
      </main>
    </>
  );
};

export default Layout;
