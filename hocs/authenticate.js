import { useUser } from '@auth0/nextjs-auth0';
import { SignupSigninDemo } from '../components/Signup-Signin-Demo';

const Authenticate = ({ children }) => {
  const { user, error, isLoading } = useUser();
  console.log('user', user);
  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h1>Loading</h1>;
  if (!user) return <SignupSigninDemo />;
  if (user) return <>{children}</>;
  return <h1>Unknown Error</h1>;
};

export default Authenticate;
