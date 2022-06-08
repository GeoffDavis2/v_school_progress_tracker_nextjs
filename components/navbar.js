import Link from 'next/link';
import { useRouter } from 'next/router';
// import { signOut } from 'next-auth/react';

const textStyle = {
  padding: '5px 25px',
  borderBottom: '.5rem solid InactiveBorder',
  fontSize: 'larger',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const NavItem = ({ item }) => {
  const router = useRouter();
  const activeStyle = '.5rem solid blue';
  return (
    <div
      style={{
        ...textStyle,
        borderBottom: router.pathname === item.href ? activeStyle : null,
      }}
    >
      <Link href={item.href} passHref>
        <div>{item.title}</div>
      </Link>
    </div>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const menuItems = [
    { title: 'Home Page', href: '/' },
    { title: 'Student Dashboard', href: '/student-dashboard' },
    { title: 'Progress Charts', href: '/progress-charts' },
    { title: 'Progress Data', href: '/progress-data' },
    { title: 'Settings', href: '/settings' },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={textStyle}>V School Progress Tracker</div>
      <div style={{ display: 'flex' }}>
        {menuItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
        <button
          style={{ marginLeft: '25px' }}
          // onClick={() => signOut({ callbackUrl: '/' })
          onClick={() => router.push('/api/auth/logout')}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
