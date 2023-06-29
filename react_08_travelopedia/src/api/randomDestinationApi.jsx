import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDestinationApi = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    // Query -> Get
    // Mutation -> Post/Put/Detele
    getRandomDestination: builder.query({
      query: () =>  ({
        url: "addresses",
        method: "GET",
      }),
    }),
  }),
});

export const {
    useGetRandomDestinationQuery,
} = randomDestinationApi;
