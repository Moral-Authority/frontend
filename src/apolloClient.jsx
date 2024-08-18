// src/apolloClient.js

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://moral-authority-backend-56265045ce82.herokuapp.com/", // Replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
