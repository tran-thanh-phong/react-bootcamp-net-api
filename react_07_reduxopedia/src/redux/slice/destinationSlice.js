import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initialState = {
  destinations: [
    {
      name: "Hong Kong",
      days: 7,
      fact: "World's longest covered escalator",
    },
    {
      name: "Japan",
      days: 10,
      fact: "Japan is mostly mountains",
    },
    {
      name: "New Zealand",
      days: 14,
      fact: "Last country in the world to be inhabited by humans",
    },
  ],
  destinationSelected: null,
};

export const destinationSlide = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      console.log(action);
      state.destinationSelected = action.payload;
    },
    resetDestination: (state) => {
      state.destinationSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.destinationSelected = null;
    });
  },
});

export const { destinationClicked, resetDestination } =
  destinationSlide.actions;

export const destinationReducer = destinationSlide.reducer;
