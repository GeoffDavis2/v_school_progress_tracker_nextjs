import { useSession, signIn } from 'next-auth/react';

const Authenticate = ({ children }) => {
  const { status } = useSession();
  if (status === 'unauthenticated')
    return (
      <>
        <button
          onClick={() =>
            signIn('github', {
              callbackUrl: `${window.location.origin}`,
            })
          }
        >
          <h1>Sign In with GitHub</h1>
        </button>
      </>
    );
  if (status === 'loading') return <h1>Logging In</h1>;
  if (status === 'authenticated') return <>{children}</>;
  return <>Unknown Error</>;
};

export default Authenticate;
