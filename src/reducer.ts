import React from "react";

export const initialState = {
  logginState: "success",
};

export const Context = React.createContext({} as any);

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        logginState: action.payload,
      };
    case "login":
      return {
        ...state,
        logginState: action.payload,
      };
    default:
      return state;
  }
};
