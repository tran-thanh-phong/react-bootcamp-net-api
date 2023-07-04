// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { configuration } from '../Utility/SD';

// const menuItemApi = createApi({
//   reducerPath: "menuItemApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: configuration.baseUrl,
//     prepareHeaders: (headers: Headers, api) => {
//       const token = localStorage.getItem("token");
//       token && headers.append("Authorization", "Bearer " + token);
//     },
//   }),
//   tagTypes: ["MenuItems"],
//   endpoints: (builder) => ({
//     getMenuItems: builder.query({
//       query: () => ({
//         url: "menuitem",
//       }),
//       providesTags: ["MenuItems"],
//     }),
//     getMenuItemById: builder.query({
//       query: (id) => ({
//         url: `menuitem/${id}`,
//       }),
//       providesTags: ["MenuItems"],
//     }),
//     createMenuItem: builder.mutation({
//       query: (data) => ({
//         url: "menuitem",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["MenuItems"],
//     }),
//     updateMenuItem: builder.mutation({
//       query: ({ data, id }) => ({
//         url: "menuitem/" + id,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["MenuItems"],
//     }),
//     deleteMenuItem: builder.mutation({
//       query: (id) => ({
//         url: "menuitem/" + id,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["MenuItems"],
//     }),
//   }),
// });

// export const {
//   useGetMenuItemsQuery,
//   useGetMenuItemByIdQuery,
//   useCreateMenuItemMutation,
//   useUpdateMenuItemMutation,
//   useDeleteMenuItemMutation,
// } = menuItemApi;
// export default menuItemApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configuration } from "../Utility/SD";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: configuration.baseUrl,
  }),
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => ({
        url: "menuItem",
      }),
    }),
    getMenuItemById: builder.query({
      query: ({ id }) => ({
        url: `menuItem/${id}`,
        params: {
          id: id,
        },
      }),
    }),
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery } = menuItemApi;

export default menuItemApi;
