import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        // TO DO
        setLoggedIn({id:1,name:"Username",profilePic:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"});
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(loggedIn))
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn, login }}>{children}</AuthContext.Provider>
    );
};