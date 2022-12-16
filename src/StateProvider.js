import React, {createContext, useContext, useReducer} from 'react';

<<<<<<< Updated upstream
// Prepares the dataLayer
export const StateContext = createContext();


// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
=======
//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
>>>>>>> Stashed changes
        {children}
    </StateContext.Provider>
);

<<<<<<< Updated upstream
// Pull information from the data LAyer
=======

//Pull info from the dateLayer
>>>>>>> Stashed changes
export const useStateValue = () => useContext(StateContext);