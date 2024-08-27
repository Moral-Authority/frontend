import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.moralauthority.co/graphql', // Ensure it's HTTPS
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//  LOCAL TESTING CONFIG
// const httpLink = createHttpLink({
//   uri: 'http://localhost:8080/graphql', // Change to local backend for testing
// });

// const authLink = setContext((_, { headers }) => {
//   // Get the authentication token from local storage if it exists
//   const token = localStorage.getItem('auth-token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

export default client;
