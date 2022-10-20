/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import ToastsManager from '@helpers/toasts.manager';
import { signOut } from 'next-auth/react';

export default function useApolloClient(initialState: any): ApolloClient<NormalizedCacheObject> {
  const onErrorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions?.code) {
          case 'UNAUTHENTICATED': {
            signOut({ callbackUrl: '/' });
            break;
          }

          case 'INTERNAL_SERVER_ERROR': {
            ToastsManager.showToast('error', 'Ha ocurrido un error, contacte con soporte. 🙁');
            break;
          }
          // err?.extensions?.response?.message?.length > 0
          case 'BAD_USER_INPUT': {
            if (err.extensions && err.extensions.response) {
              const response = err.extensions.response as any;
              if (Array.isArray(response.message) && response.message.length > 0) {
                ToastsManager.showToast('error', response.message[0]);
              }
            } else {
              ToastsManager.showToast('error', err.message);
            }
            break;
          }

          case 'FORBIDDEN': {
            ToastsManager.showToast('error', 'No tienes permiso para esta acción.');
            break;
          }
        }
      }
    }
  });

  const httpLink = createHttpLink({
    uri:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
        : 'https://clp-api.qcode.app/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
      },
    };
  });

  const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(onErrorLink).concat(httpLink),
    cache: new InMemoryCache(),
  });

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  // Create the Apollo Client once in the client
  return apolloClient;
}
