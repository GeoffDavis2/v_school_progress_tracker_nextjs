import { useSession } from 'next-auth/react';
import { SignupSigninDemo } from '../components/Signup-Signin-Demo';

const Authenticate = ({ children }) => {
  const { data, status } = useSession();

  if (status === 'demo') return <h1>Status is Demo</h1>;
  if (status === 'unauthenticated') return <SignupSigninDemo />;
  if (status === 'loading') return <h1>Logging In</h1>;
  if (status === 'authenticated') return <>{children}</>;
  return <h1>Unknown Error</h1>;
};

export default Authenticate;
