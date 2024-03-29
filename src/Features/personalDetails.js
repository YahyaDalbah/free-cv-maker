import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  imageURL: "",
  jobTitle: "",
  phone: "",
  country: "",
  city: "",
  address: "",
  dateOfBirth: "",
  githubURL: "",
  linkedInURL: ""
};

export const setImageAsync = createAsyncThunk('')

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.imageURL = action.payload;
    },
    deleteImage: (state) => {
      state.imageURL = "";
    },
    setPersonalDetails: (state, action) => {
      state[action.payload[0]] = action.payload[1];
    },
    
  },
});

export const { setImage, setPersonalDetails, deleteImage } = personalDetailsSlice.actions;
export const selectPersonalDetails = (state) => state.personalDetails;
export default personalDetailsSlice.reducer;
