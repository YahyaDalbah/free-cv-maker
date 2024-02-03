import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state) => {
      state.push({
        id: nanoid(),
        projectTitle: "",
        startDate: "",
        endDate: "",
        desc: "",
      });
    },
    setProject: (state, action) => {
      updateState(state, action);
    },
    deleteProject: (state, action) => {
      deleteStateElement(state, action);
    },
  },
});

export const { setProject, addProject, deleteProject } =
  projectsSlice.actions;
export const selectProjects = (state) => state.projects;
export default projectsSlice.reducer;
