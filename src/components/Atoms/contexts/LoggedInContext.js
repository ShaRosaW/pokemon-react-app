import { useState, createContext } from "react";

export const LoggedInContext = createContext({});

export const LoggedInProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoggedInContext.Provider
        value={{
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
    }}
    >
        {props.children}
    </LoggedInContext.Provider>
    );
}