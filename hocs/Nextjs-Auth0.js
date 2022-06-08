import { UserProvider } from '@auth0/nextjs-auth0';

const NextJS_Auth0 = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default NextJS_Auth0;
