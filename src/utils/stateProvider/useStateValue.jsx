// utils/stateProvider/useStateValue.js
import { useContext, createContext, useReducer } from "react";

// Create the context
const StateContext = createContext();

// Create the StateProvider component
const StateProvider = ({ reducer, state, children }) => (
    <StateContext.Provider value={useReducer(reducer, state)}>
        {children}
    </StateContext.Provider>
);

// Custom hook to use the StateContext
const useStateValue = () => useContext(StateContext);

export { StateProvider, useStateValue };
