import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import theme from '../themes/default';
import createEmotionCache from '../themes/createEmotionCache';
import { Session } from 'next-auth';
import { ApolloProvider } from '@apollo/client';
import client from 'graphql/hooks/useApolloClient';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps & { session: Session }) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { ...pageProps },
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider pageProps={pageProps}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer
            draggable
            closeOnClick
            pauseOnHover
            pauseOnFocusLoss
            rtl={false}
            limit={1}
            autoClose={5000}
            newestOnTop={false}
            hideProgressBar={false}
            position="bottom-center"
          />
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const AuthProvider = ({ children, pageProps }: any) => {
  const apolloClient = client(pageProps.initialApolloState);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default MyApp;
