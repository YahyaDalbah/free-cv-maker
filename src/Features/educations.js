import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const educationSlice = createSlice({
  name: "education",
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
    addEducationFromDB: (state, action) => {
      state.push(action.payload)
    },
    setEducation: (state, action) => {
      updateState(state, action)
    },
    deleteEducation: (state, action) => {
      deleteStateElement(state, action)
    },
  },
});

export const { setEducation,addEducationFromDB, addEducation, deleteEducation } =
  educationSlice.actions;
export const selectEducation = (state) => state.education;
export default educationSlice.reducer;
