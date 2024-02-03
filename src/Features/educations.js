import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {
    addEducation: (state) => {
      state.push({
        id: nanoid(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        desc: "",
      });
    },
    setEducation: (state, action) => {
      updateState(state, action)
    },
    deleteEducation: (state, action) => {
      deleteStateElement(state, action)
    },
  },
});

export const { setEducation, addEducation, deleteEducation } =
  educationSlice.actions;
export const selectEducation = (state) => state.educations;
export default educationSlice.reducer;
