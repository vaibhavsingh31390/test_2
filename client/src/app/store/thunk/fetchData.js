import { createAsyncThunk } from "@reduxjs/toolkit";
import { routesHelper } from "../../utils/helpers";
import { setError, setLoading } from "../slices/appSlice";

export const fetchDataThunk = createAsyncThunk(
  "app/fetchData",
  async ({ uri, method = "GET", options = {} }, { dispatch, getState }) => {
    const state = getState();
    const token = state.app.jwt;

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await fetch(routesHelper.getEndpoint(uri), {
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: ["GET", "HEAD"].includes(method.toUpperCase())
          ? null
          : JSON.stringify(options.body),
      });

      const responseData = await response.json();
      if (!response.ok || responseData.error) {
        const errorMessage = responseData.message || "Failed to fetch data";
        throw new Error(errorMessage);
      }
      return responseData;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
