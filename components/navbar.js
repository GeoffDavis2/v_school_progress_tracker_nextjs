import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

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
  console.log(items[0]);
  return (
    <div className="navbar">
      <Logo />
      {items.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </div>
  );
};
