import Layout from '../hocs/layout';
import Authenticate from '../hocs/authenticate';
import { ContextProvider } from '../hocs/context-provider';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Authenticate>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Authenticate>
      </ContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
