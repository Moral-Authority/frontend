import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import reducer from "./utils/stateProvider/reducer";
import state from "./utils/stateProvider/state";
import { StateProvider } from "./utils/stateProvider/useStateValue";

const httpLink = createHttpLink({
  uri: "http://localhost:8000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const Providers = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <StateProvider reducer={reducer} state={state}>
        {children}
      </StateProvider>
    </ApolloProvider>
  );
};
