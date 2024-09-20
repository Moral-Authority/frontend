// Providers.jsx
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import reducer from "./utils/stateProvider/reducer";
import initialState from "./utils/stateProvider/state";
import { StateProvider } from "./utils/stateProvider/useStateValue";

export const Providers = ({ children }) => {
  // const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Use VITE_ prefix for Vite env variables

  // if (!clientId) {
  //   console.error('Google Client ID is not defined');
  //   return null;
  // }

  return (
    // <GoogleOAuthProvider clientId={clientId}>
      <ApolloProvider client={client}>
        <StateProvider reducer={reducer} state={initialState}>
          {children}
        </StateProvider>
      </ApolloProvider>
    // </GoogleOAuthProvider>
  );
};
