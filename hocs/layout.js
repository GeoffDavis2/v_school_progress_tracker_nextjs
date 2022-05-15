import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import { SelectStudent } from '../components/select-student';

const Layout = ({ children }) => {
  const menuItems = [
    { title: 'Progress-Charts', href: '/progress-charts' },
    { title: 'Progress Data', href: '/progress-data' },
    { title: 'Settings', href: '/settings' },
  ];

  return (
    <>
      <Head>
        <title>V School Progress Tracker</title>
      </Head>

      <header>
        <Navbar items={menuItems} />
      </header>

      <main>
        <SelectStudent />
        {children}
        <footer>&nbsp;</footer>
      </main>
    </>
  );
};

export default Layout;
