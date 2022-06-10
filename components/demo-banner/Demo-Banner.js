import { useUser } from '@auth0/nextjs-auth0';
import styles from './styles.module.css';

export const DemoBanner = () => {
  const { user, error, isLoading } = useUser();

  let bannerText = '';
  if (isLoading) bannerText = 'Loading...';
  if (error) bannerText = `Error: ${error.message}`;
  if (!user)
    bannerText =
      'In DEMO MODE. You are only viewing random sample data. To see actual data, Sign Up and Log In...';
  if (user && !user?.email_verified)
    bannerText =
      'You are STILL in DEMO MODE, you must verify your email before you can view actual data.  Check for a Verify email and click the link.  Then log back in...';
  bannerText += '\u00a0\u00a0\u00a0';

  if (!isLoading && !user?.email_verified)
    return (
      <div className={styles.scroll}>
        <div className={styles.m_scroll}>
          <span className={styles.the_span}>{bannerText}</span>
          <span className={styles.the_span}>{bannerText}</span>
        </div>
      </div>
    );
};
