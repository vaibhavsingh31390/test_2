/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { defAuth, authStore } from "./stores";

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(defAuth);

  useEffect(() => {
    if (authState.isAuth) {
      localStorage.setItem("user", "true");
    } else {
      localStorage.removeItem("user");
    }
  }, [authState.isAuth]);

  const setAuth = (status) => {
    setAuthState((prevState) => ({
      ...prevState,
      isAuth: status,
    }));
  };

  return (
    <authStore.Provider value={{ authState, setAuth }}>
      {children}
    </authStore.Provider>
  );
};
