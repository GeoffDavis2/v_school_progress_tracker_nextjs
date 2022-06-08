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
        <footer
          style={{
            backgroundColor: 'black',
            padding: '50px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ color: 'white' }}>Footer Info for V School Here...</h1>
        </footer>
      </main>
    </>
  );
};

export default Layout;
