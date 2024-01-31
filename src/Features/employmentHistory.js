import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getEmployment } from "../functions";

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
    setEmployment: (state, action) => {
      const employment = getEmployment(state, action.payload.id)

      employment[action.payload.changedField[0]] =
        action.payload.changedField[1];
    },
    deleteEmployment: (state, action) => {
      const employmentToDeleteIndex = state.findIndex(employment => employment.id === action.payload)
      state.splice(employmentToDeleteIndex,1)
    }
  },
});

export const { setEmployment, addEmployment, deleteEmployment } = employmentHistorySlice.actions;
export const selectEmploymentHistory = (state) => state.employmentHistory;
export default employmentHistorySlice.reducer;
