import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialSate = {
    logged: false
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialSate);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login
    }}>
        {children}
    </AuthContext.Provider>
  );
}
