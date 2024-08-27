// Providers.jsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import reducer from "./utils/stateProvider/reducer";
import initialState from "./utils/stateProvider/state";
import { StateProvider } from "./utils/stateProvider/useStateValue";

export const Providers = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <StateProvider reducer={reducer} state={initialState}>
        {children}
      </StateProvider>
    </ApolloProvider>
  );
};
