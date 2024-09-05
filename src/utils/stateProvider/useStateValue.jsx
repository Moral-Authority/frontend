import { useContext, createContext, useReducer } from "react";
import initialState, { actionTypes } from "./state"; // Import both initialState and actionTypes from state.js

// Create the context
const StateContext = createContext();

// Create the StateProvider component
const StateProvider = ({ reducer, state = initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, state)}>
        {children}
    </StateContext.Provider>
);

// Custom hook to use the StateContext
const useStateValue = () => useContext(StateContext);

export { StateProvider, useStateValue, actionTypes }; // Now actionTypes is properly exported
