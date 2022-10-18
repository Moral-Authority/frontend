import { useContext, createContext, useReducer } from "react";

const State = createContext()

const StateProvider = ({ reducer, state, children }) => (
    <State.Provider value={useReducer(reducer, state)}>
        {children}
    </State.Provider>
)

const useStateValue = () => useContext(State);

export { StateProvider, useStateValue }