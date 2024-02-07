import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state) => {
      state.push({
        id: nanoid(),
        skill: "",
        level: "",
      });
    },
    addSkillFromDB: (state, action) => {
      state.push(action.payload);
    },
    setSkill: (state, action) => {
      updateState(state, action);
    },
    deleteSkill: (state, action) => {
      deleteStateElement(state, action);
    },
  },
});

export const { setSkill,addSkillFromDB, addSkill, deleteSkill } = skillSlice.actions;
export const selectSkills = (state) => state.skills;
export default skillSlice.reducer;
