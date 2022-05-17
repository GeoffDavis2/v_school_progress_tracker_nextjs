import { useSession } from 'next-auth/react';
// import React from 'react';

const Authenticate = ({ children }) => {
  const { status } = useSession();
  console.log(status);
  if (status === 'loading') return <div>Loading</div>;
  if (status === 'unauthenticated') return <div>Log in</div>
  if (status === 'authenticated') return <>{children}</>
  return <>Unknown Error</>
};

export default Authenticate;
