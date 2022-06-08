import Layout from '../hocs/layout';
import NextJS_Auth0 from '../hocs/Nextjs-Auth0';
import { ContextProvider } from '../hocs/context-provider';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextJS_Auth0>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </NextJS_Auth0>
  );
}
