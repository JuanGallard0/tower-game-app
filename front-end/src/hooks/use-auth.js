import React, { useState, useEffect, useContext, createContext } from "react";
import { useLocalStorage } from "./use-localStorage";

const API = "http://localhost:3001";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [userLocal, setUserLocal] = useLocalStorage("user", null);

    const signin = async (userName, password) => {
        const response = await fetch(`${API}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });
        const responseJSON = await response.json();
        if (!responseJSON) return { error: "Can't connect with the server" };
        else {
            if (responseJSON.error) return responseJSON;
            else {
                setUser({ token: responseJSON.token, ...responseJSON.user });
                setUserLocal({
                    token: responseJSON.token,
                    ...responseJSON.user,
                });
                return { success: true };
            }
        }
        return responseJSON;
    };

    const createuser = async (userName, email, password) => {
        const response = await fetch(`${API}/createuser`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, email, password }),
        });
        const responseJSON = await response.json();
        if (!responseJSON) return { error: "We can't connect with the server" };
        else {
            if (responseJSON.error) return responseJSON;
            else {
                return { success: true };
            }
        }
        return responseJSON;
    };

    const signout = () => {};

    const sendPasswordResetEmail = (email) => {};

    const confirmPasswordReset = (code, password) => {};

    useEffect(() => {
        setUser(userLocal);
    }, []);

    // Return the user object and auth methods
    return {
        API,
        user,
        signin,
        createuser,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
    };
}
