// State data layer

import React, { createContext, useEffect, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
  >
      {children}

  </StateContext.Provider>
);
