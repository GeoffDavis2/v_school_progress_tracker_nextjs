import { useUser } from '@auth0/nextjs-auth0';

export const DemoBanner = () => {
  const { user, error, isLoading } = useUser();

  // TODO If loading, show loading message

  // TODO If error, then display error message

  // TODO Test for if user but email_verified is false, banner should say "Verify your email to see actual student data"
  // console.log(user?.email_verified);

  // TODO Make the text continuously scroll sideways accross screen
  if (!isLoading && !user)
    return (
      <h1
        style={{
          backgroundColor: 'red',
          color: 'white',
          animation: 'slide-left 20s linear infinite',
          textAlign: 'center',
        }}
      >
        In Demo Mode. You are only viewing random sample data. To see actual
        data, Sign Up and Log In.
      </h1>
    );
};
