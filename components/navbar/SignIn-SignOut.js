import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

export const SignInSignOut = () => {
  const router = useRouter();
  const { user } = useUser();

  // TODO Figure out how to redirect to Dashboard once logged in (or pull last page from localstorage?)
  // TODO Figure out how to remember credentials so user doesn't have to keep putting in email and password
  return user ? (
    <button
      style={{ marginLeft: '25px' }}
      onClick={() => router.push('/api/auth/logout')}
    >
      Log Out
    </button>
  ) : (
    <button
      style={{ marginLeft: '25px' }}
      onClick={() => router.push('/api/auth/login')}
    >
      Sign In
    </button>
  );
};
