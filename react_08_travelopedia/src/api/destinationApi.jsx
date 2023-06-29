import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    // Query -> Get
    // Mutation -> Post/Put/Detele
    getAllDestination: builder.query({
      query: () => "destination",
      providesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
