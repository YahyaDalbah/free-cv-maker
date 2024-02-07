import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const employmentHistorySlice = createSlice({
  name: "employmentHistory",
  initialState,
  reducers: {
    addEmployment: (state) => {
      state.push({
        id: nanoid(),
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        desc: "",
      });
    },
    addEmploymentFromDB: (state, action) => {
      state.push(action.payload)
    },
    
    setEmployment: (state, action) => {
      updateState(state, action)
    },
    deleteEmployment: (state, action) => {
      deleteStateElement(state, action)
    }
  },
});

export const { setEmployment,addEmploymentFromDB, addEmployment, deleteEmployment } = employmentHistorySlice.actions;
export const selectEmploymentHistory = (state) => state.employmentHistory;
export default employmentHistorySlice.reducer;
