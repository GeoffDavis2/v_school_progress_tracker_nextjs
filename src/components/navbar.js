import React from 'react';
import Link from 'next/link';

const NavItem = ({ item }) => {
  return (
    <div
    //   borderBottom={'8px'}
    //   borderBottomColor={item.isActive ? 'cerulean' : 'InactiveBorder'}
    //   marginRight={'2rem'}
    >
      <Link href={item.href} passHref>
        <div
        //   textDecoration={'unset'}
        //   fontSize={15}
        //   textTransform={'uppercase'}
        //   fontWeight={'bold'}
        >
          {item.title}
        </div>
      </Link>
    </div>
  );
};

export const Navbar = ({ items }) => {
  return (
    <div
    // flexbox
    //   justifyContent={'space-between'}
    >
      <img
      // image
      // src={`/images/book_transparent.png`}
      alt={'no image'}
      // height={'2.5rem'}
      // objectFit={'contain'}
      // margin={'1rem'}
      />
      <div
      // flexbox
      // justifyContent={'space-between'}
      // minWidth={'50vw'}
      >
        {/* {items.map((item) => (
          <NavItem key={item.title} item={item} />
        ))} */}
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
      </div>
    </div>
  );
};
