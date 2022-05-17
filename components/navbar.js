import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { signIn, signOut } from 'next-auth/react';

const NavItem = ({ item }) => {
  return (
    <div className="navitem">
      <Link href={item.href} passHref>
        <div>{item.title}</div>
      </Link>
    </div>
  );
};

export const Navbar = ({ items }) => {
  return (
    <div className="navbar">
      <Logo />
      {items.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
      <button onClick={() => signIn('github')}>Sign In</button>
      <button onClick={() => signOut('github')}>Sign Out</button>
    </div>
  );
};
