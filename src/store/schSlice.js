import { createSlice } from '@reduxjs/toolkit';

//createSlice create reducer slice
const schSlice = createSlice({
  name: 'sch',
  initialState: {
    name: 'Unitec',
    address: 'Mt Ablert',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { setName: setSchoolName, setAddress } = schSlice.actions;
export const { reducer: schReducer } = schSlice;
