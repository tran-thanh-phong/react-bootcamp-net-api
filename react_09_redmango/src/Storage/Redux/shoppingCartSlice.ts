// import { createSlice } from "@reduxjs/toolkit";
// import { shoppingCartModel } from "../../Interfaces";

// const initialState: shoppingCartModel = {
//   cartItems: [],
// };

// export const shoppingCartSlice = createSlice({
//   name: "cartItems",
//   initialState: initialState,
//   reducers: {
//     setShoppingCart: (state, action) => {
//       state.cartItems = action.payload;
//     },
//     updateQuantity: (state, action) => {
//       //payload - cart item that needs to be updated, newquantity
//       state.cartItems = state.cartItems?.map((item) => {
//         if (item.id === action.payload.cartItem.id) {
//           item.quantity = action.payload.quantity;
//         }
//         return item;
//       });
//     },
//     removeFromCart: (state, action) => {
//       //payload - cart item that needs to be updated, newquantity
//       state.cartItems = state.cartItems?.filter((item) => {
//         if (item.id === action.payload.cartItem.id) {
//           return null;
//         }
//         return item;
//       });
//     },
//   },
// });

// export const { setShoppingCart, updateQuantity, removeFromCart } =
//   shoppingCartSlice.actions;
// export const shoppingCartReducer = shoppingCartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";
import { shoppingCartModel } from "../../Interfaces";

const initialState: shoppingCartModel = {
  cartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cartItems = action.payload;
    },
    updateQuantity: (state, action) => {
      //console.log("updateQuantity", state, action);
      state.cartItems = state.cartItems?.map((item) => {
        console.log('before update', item.id, action.payload.cartItem.id);
        if (item.id == action.payload.cartItem.id) {
          item.quantity += action.payload.quantity;
        }

        console.log('after update', item);
        return item;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems?.filter((item) => {
        if (item.id == action.payload.id) {
          return null;
        }

        return item;
      });
    }
  },
});

export const { setShoppingCart, updateQuantity, removeFromCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
