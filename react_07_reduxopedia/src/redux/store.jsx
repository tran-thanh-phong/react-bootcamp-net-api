import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/couterSlice";
import { destinationReducer } from "./slice/destinationSlice";

import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "./slice/couterSlice";
import { destinationClicked, resetDestination } from "./slice/destinationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    destination: destinationReducer,
  },
});

export {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  destinationClicked,
  resetDestination,
};
