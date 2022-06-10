import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navbar } from '../components/navbar/Navbar';
import { SelectStudent } from '../components/select-student';
import { DemoBanner } from '../components/demo-banner/Demo-Banner';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>V School Progress Tracker</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        {router.pathname !== '/' && (
          <>
            <DemoBanner />
            <SelectStudent />
          </>
        )}
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
