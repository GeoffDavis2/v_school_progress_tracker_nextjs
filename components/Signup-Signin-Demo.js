import { signIn } from 'next-auth/react';

export const SignupSigninDemo = () => {
  console.log();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <h1>Welcome to the V School Progress Tracker!</h1>

      <button
        style={{ marginTop: '4rem' }}
        onClick={() => signIn('auth0', { callbackUrl: '/progress-charts' })}
      >
        <h1>Sign Up / Sign In with Auth0</h1>
      </button>
      {/* <h3 style={{ color: 'red' }}>Only if your email is on our Whitelist</h3> */}

      {/* <button
        style={{ marginTop: '4rem' }}
        onClick={() => console.log('Clicked Me')}
      >
        <h1>Website Demo</h1>
      </button>
      <h3 style={{ color: 'limegreen' }}>For anyone try out the website</h3> */}
    </div>
  );
};
