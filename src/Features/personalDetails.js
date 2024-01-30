import { createSlice } from "@reduxjs/toolkit";

const initialPersonalDetailsState = {
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
};

export const personalDetailsSlice = createSlice({
    name: 'personalDetails',
    initialState: initialPersonalDetailsState,
    reducers:{
      setImage: (state,action) => {
        state.imageURL = action.payload
      },
      setPersonalDetails: (state,action) => {
        
        state[action.payload[0]] = action.payload[1];
        
      }
    }
})

export const {setImage, setPersonalDetails} = personalDetailsSlice.actions
export const selectPersonalDetails = (state) => state.personalDetails;
export default personalDetailsSlice.reducer
