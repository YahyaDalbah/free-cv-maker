import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    addLanguage: (state) => {
      state.push({
        id: nanoid(),
        language: "",
        level: "",
      });
    },
    addLanguageFromDB: (state, action) => {
      state.push(action.payload);
    },
    setLanguage: (state, action) => {
      updateState(state, action);
    },
    deleteLanguage: (state, action) => {
      deleteStateElement(state, action);
    },
  },
});

export const { setLanguage,addLanguageFromDB, addLanguage, deleteLanguage } = languageSlice.actions;
export const selectLanguages = (state) => state.languages;
export default languageSlice.reducer;
