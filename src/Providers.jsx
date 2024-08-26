import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Adjust the path to where your Apollo Client setup is located
import reducer from "./utils/stateProvider/reducer";
import state from "./utils/stateProvider/state";
import { StateProvider } from "./utils/stateProvider/useStateValue";

export const Providers = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <StateProvider reducer={reducer} state={state}>
        {children}
      </StateProvider>
    </ApolloProvider>
  );
};
