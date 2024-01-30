import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./Features/personalDetails";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
  },
});
