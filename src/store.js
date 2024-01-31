import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./Features/personalDetails";
import profileSummaryReducer from "./Features/profileSummary";
import employmentHistoryReducer from "./Features/employmentHistory";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    profileSummary: profileSummaryReducer,
    employmentHistory: employmentHistoryReducer,
  },
});
