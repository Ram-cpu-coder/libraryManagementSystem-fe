import React, { createContext, useState } from "react";
import axios from "axios";

// creating a context
const UserContext = createContext();

// provider
const userContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const logOut = () => {
    setUser({});
    localStorage.removeItem("refreshJWT");
  };

  const autoLogIn = async () => {
    // const
  };
  const exposedData = {};
  return (
    <UserContext.Provider
      // exposing data
      value={exposedData}
    >
      {children}
    </UserContext.Provider>
  );
};

export default userContext;
