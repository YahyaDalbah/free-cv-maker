import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./Features/personalDetails";
import profileSummaryReducer from "./Features/profileSummary";
import employmentHistoryReducer from "./Features/employmentHistory";
import educationsReducer from "./Features/educations";
import skillsReducer from "./Features/skills";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    profileSummary: profileSummaryReducer,
    employmentHistory: employmentHistoryReducer,
    educations: educationsReducer,
    skills: skillsReducer
  },
});
