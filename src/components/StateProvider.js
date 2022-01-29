// State data layer

import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// const initialState = {

// }

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* CHILDREN IS THE COMPONENT WHICH IS GOING TO BE WRAPPED INSIDE THE STATEPROVIDE COMPONENT.
    IN OUR CASE IT IS THE APP COMPONENT */}
    {children}
  </StateContext.Provider>
);
