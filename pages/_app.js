import Layout from '../hocs/layout';
import Authenticate from '../hocs/authenticate';
import { ContextProvider } from '../hocs/context-provider';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

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
