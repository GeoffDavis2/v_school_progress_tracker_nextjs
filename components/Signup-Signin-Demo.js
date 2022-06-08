// import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const SignupSigninDemo = () => {
  const router = useRouter();
  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '25px',
    padding: '25px',
    marginTop: '2rem',
    marginBottom: '50px',
  };

  const buttonLableStyle = {
    fontSize: '3rem',
    color: 'white',
    marginBottom: '10px',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <h1>Welcome to the V School Progress Tracker!</h1>

      <div style={{ ...buttonGroupStyle, backgroundColor: 'green' }}>
        <div style={buttonLableStyle}>For V School Staff &#38; Students</div>
        <button onClick={() => router.push('/api/auth/login')}>
          <h1>Sign Up / Sign In with Auth0</h1>
        </button>
        <div style={{ color: 'white' }}>Using LIVE data</div>
      </div>

      <div style={{ ...buttonGroupStyle, backgroundColor: 'blue' }}>
        <div style={buttonLableStyle}>Public Access</div>
        <button onClick={() => router.push('./student-dashboard')}>
          <h1>Website Demo</h1>
        </button>
        <div style={{ color: 'white' }}>Using SAMPLE data</div>
      </div>
    </div>
  );
};
