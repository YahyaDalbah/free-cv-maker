import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state) => {
      state.push({
        id: nanoid(),
        course: "",
        institution: "",
        startDate: "",
        endDate: "",
      });
    },
    setCourse: (state, action) => {
      updateState(state, action);
    },
    deleteCourse: (state, action) => {
      deleteStateElement(state, action);
    },
  },
});

export const { setCourse, addCourse, deleteCourse } = coursesSlice.actions;
export const selectCourses = (state) => state.courses;
export default coursesSlice.reducer;
