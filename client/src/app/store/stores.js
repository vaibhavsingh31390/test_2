import { createContext } from "react";
export const defAuth = {
  isAuth: localStorage.getItem("user") ? true : false,
  config: null,
  dark_mode: localStorage.getItem("dark_mode") ? true : false,
};

export const authStore = createContext(defAuth);
