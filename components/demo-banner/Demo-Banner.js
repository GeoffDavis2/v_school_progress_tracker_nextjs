import { useUser } from '@auth0/nextjs-auth0';
import styles from './styles.module.css';

export const DemoBanner = () => {
  const { user, error, isLoading } = useUser();

  // TODO If loading, show loading message

  // TODO If error, then display error message

  // TODO Test for if user but email_verified is false, banner should say "Verify your email to see actual student data"
  // console.log(user?.email_verified);

  // TODO Make the text continuously scroll sideways accross screen
  if (!isLoading && !user)
    return (
      // <div className={styles.demo_banner}>
      <div className={styles.marquee}>
        <span>
          In Demo Mode. You are only viewing random sample data. To see actual
          data, Sign Up and Log In....
        </span>
        <span>
          In Demo Mode. You are only viewing random sample data. To see actual
          data, Sign Up and Log In....
        </span>
        <span>
          In Demo Mode. You are only viewing random sample data. To see actual
          data, Sign Up and Log In....
        </span>
      </div>
    );
};
