import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteStateElement, updateState } from "../functions";

const initialState = [];

export const referenceSlice = createSlice({
  name: "references",
  initialState,
  reducers: {
    addReference: (state) => {
      state.push({
        id: nanoid(),
        referent: "",
        company: "",
        phone: "",
        email: "",
      });
    },
    setReference: (state, action) => {
      updateState(state, action);
    },
    deleteReference: (state, action) => {
      deleteStateElement(state, action);
    },
  },
});

export const { setReference, addReference, deleteReference } =
  referenceSlice.actions;
export const selectReferences = (state) => state.references;
export default referenceSlice.reducer;
