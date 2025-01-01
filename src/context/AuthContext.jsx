import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: null,
  isAuthenticated: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
