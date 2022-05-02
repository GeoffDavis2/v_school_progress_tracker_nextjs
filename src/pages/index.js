// import { getAllStudents } from '../helpers/get-all-students';
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import { SelectStudent } from '../components/select-student';

export default function Home() {
  return (
    <div>
      <Head>
        <title>V School Progress Tracker</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <SelectStudent />
      </main>

      <footer>footer</footer>
    </div>
  );
}
