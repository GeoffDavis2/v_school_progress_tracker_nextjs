import { useSession, signIn } from 'next-auth/react';

const Authenticate = ({ children }) => {
  const { status } = useSession();

  if (status === 'unauthenticated')
    return (
      <button
        onClick={() => signIn('auth0', { callbackUrl: '/progress-charts' })}
      >
        <h1>Sign In with Auth0</h1>
      </button>
    );
  if (status === 'loading') return <h1>Logging In</h1>;
  if (status === 'authenticated') return <>{children}</>;
  return <h1>Unknown Error</h1>;
};

export default Authenticate;
