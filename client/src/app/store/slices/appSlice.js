import { createSlice } from "@reduxjs/toolkit";
import { fetchDataThunk } from "../thunk/fetchData";
import { useLocation } from "react-router-dom";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    currentPath: () => {
      const location = useLocation();
      return location.pathname;
    },
    isAuthenticated: Boolean(localStorage.getItem("token")),
    jwt: localStorage.getItem("token") || null,
    darkTheme: Boolean(localStorage.getItem("darkTheme")),
    appConfig: JSON.parse(localStorage.getItem("appConfig") || "null"),
    userConfig: JSON.parse(localStorage.getItem("userConfig") || "null"),
    apiCache: {},
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.token ? true : false;
      state.jwt = action.payload.token;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    setAppConfig: (state, action) => {
      state.appConfig = action.payload;
      localStorage.setItem("appConfig", JSON.stringify(action.payload));
    },
    setUserConfig: (state, action) => {
      state.userConfig = action.payload;
      localStorage.setItem("userConfig", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.appConfig = null;
      state.userConfig = null;
      state.jwt = null;
      state.apiCache = {};
      localStorage.removeItem("appConfig");
      localStorage.removeItem("userConfig");
      localStorage.removeItem("token");
      localStorage.removeItem("darkTheme");
    },
    cacheApiResponse: (state, action) => {
      const { endpoint, data, requestCount, timestamp } = action.payload;
      state.apiCache[endpoint] = data;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    clearCache: (state) => {
      state.apiCache = {};
    },

    resetState: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.jwt = null;
      state.appConfig = null;
      state.userConfig = null;
      state.apiCache = {};
      state.loading = false;
      state.error = null;
    },
    setDarkTheme: (state, action) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("darkTheme", !state.darkTheme);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  login,
  logout,
  setAppConfig,
  setUserConfig,
  cacheApiResponse,
  setDarkTheme,
  setLoading,
  setError,
  setData,
  clearCache,
  clearData,
  resetState,
} = appSlice.actions;

export default appSlice.reducer;
