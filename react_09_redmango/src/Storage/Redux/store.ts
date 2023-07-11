import { configureStore } from "@reduxjs/toolkit";
//import { menuItemReducer } from "./menuItemSlice";
import { menuItemApi, shoppingCartApi, authApi } from "../../Apis";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
  reducer: {
    userAuthStore: userAuthReducer,
    shoppingCartStore: shoppingCartReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shoppingCartApi.middleware)  
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware)
      .concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

//   authApi,
//   menuItemApi,
//   orderApi,
//   paymentApi,
//   shoppingCartApi,

//     shoppingCartStore: shoppingCartReducer,
//     userAuthStore: userAuthReducer,
//     [menuItemApi.reducerPath]: menuItemApi.reducer,
// [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [paymentApi.reducerPath]: paymentApi.reducer,
//     [orderApi.reducerPath]: orderApi.reducer,

//       .concat(menuItemApi.middleware)
//       .concat(authApi.middleware)
//       .concat(orderApi.middleware)
//       .concat(paymentApi.middleware)
