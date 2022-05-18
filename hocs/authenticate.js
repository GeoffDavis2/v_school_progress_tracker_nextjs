import { useSession, signIn } from 'next-auth/react';

const Authenticate = ({ children }) => {
  const { status } = useSession();
  // console.log(process.env.AUTH0_CLIENT_ID);
  // const domain = process.env.NEXT_PUBLIC_PORT;
  // console.log('domain',domain);

  if (status === 'unauthenticated')
    return (
      <button
        onClick={() =>
          signIn('auth0', {
            // callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/progress-charts`,
            callbackUrl: `https://v-school-progress-tracker-nextjs.vercel.app/progress-charts`,
          })
        }
      >
        <h1>Sign In with Auth0</h1>
      </button>
    );
  if (status === 'loading') return <h1>Logging In</h1>;
  if (status === 'authenticated') return <>{children}</>;
  return <>Unknown Error</>;
};

export default Authenticate;
