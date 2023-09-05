import { RelayEnvironmentProvider } from "react-relay";
import reducer from "./utils/stateProvider/reducer";
import state from "./utils/stateProvider/state";
import { StateProvider } from "./utils/stateProvider/useStateValue";
import { createEnvironment } from "./utils/relayEnvironment/environment";
import { useMemo } from "react";

export const Providers = ({ children }) => {
  const environment = useMemo(() => {
    return createEnvironment();
  }, []);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <StateProvider reducer={reducer} state={state}>
        {children}
      </StateProvider>
    </RelayEnvironmentProvider>
  );
};
