import { useState } from "react";
import { routeHelper } from "../utils/constants";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async (uri, type, options = {}) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(routeHelper.getEndpoint(uri), {
        method: type,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: ["GET", "HEAD"].includes(type.toUpperCase())
          ? null
          : JSON.stringify(options.body),
      });
      const responseData = await response.json();
      if (!response.ok || responseData.error) {
        if (response.status === 401) {
          console.log("Logout");
        }
        setError(responseData);
      } else {
        setData(responseData);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};
