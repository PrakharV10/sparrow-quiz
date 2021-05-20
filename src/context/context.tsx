import React, { createContext, useContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducer/authReducer";

const AuthContext = createContext({} as ContextValue);

export function AuthProvider({ children } : ContextProp) {
    
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}