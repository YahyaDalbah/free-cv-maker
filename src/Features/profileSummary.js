import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summary: ""
};

export const profileSummarySlice = createSlice({
  name: "profileSummary",
  initialState,
  reducers: {
    setProfileSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const { setProfileSummary } = profileSummarySlice.actions;
export const selectProfileSummary = (state) => state.profileSummary;
export default profileSummarySlice.reducer;
