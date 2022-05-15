import Layout from '../hocs/layout';
import { ContextProvider } from '../hocs/context-provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
