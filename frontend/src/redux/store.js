import { configureStore } from "@reduxjs/toolkit";
import readingsReducer from "./readingSlice";

const store = configureStore({
  reducer: {
    readings: readingsReducer,
  },
});

export default store;
