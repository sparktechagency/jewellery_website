// src/Redux/baseApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://api.kidsknowrights.com";
const baseUrl = "https://api.cathysjewelry.net";
// const baseUrl = "http://localhost:5000";
// Helper function to get the token
const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    // Client-side logic
    return localStorage.getItem("accessToken");
  }
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["profile", "event", "videos", "updateProfile"],
  endpoints: () => ({}),
});

export const fetchServerData = async (endpoint) => {
  const token = getToken();

  const baseQuery = fetchBaseQuery({ baseUrl });

  const result = await baseQuery(
    {
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      signal: new AbortController().signal,
      dispatch: () => { },
      getState: () => ({}),
      endpoint: "",
      abort: () => { },
      type: "query",
      extra: undefined,
    },
    {}
  );

  if (result.error) {
    throw new Error(result.error.data?.toString() || "Failed to fetch data");
  }

  return result.data;
};

export default baseApi;
