import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./Features/personalDetails";
import profileSummaryReducer from "./Features/profileSummary";
import employmentHistoryReducer from "./Features/employmentHistory";
import educationsReducer from "./Features/educations";
import skillsReducer from "./Features/skills";
import projectsReducer from "./Features/projects";
import languagesReducer from "./Features/languages";
import coursesReducer from "./Features/courses";
import referencesReducer from "./Features/references";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    profileSummary: profileSummaryReducer,
    employmentHistory: employmentHistoryReducer,
    educations: educationsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    languages: languagesReducer,
    courses: coursesReducer,
    references: referencesReducer
  },
});
