import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const Providers = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
