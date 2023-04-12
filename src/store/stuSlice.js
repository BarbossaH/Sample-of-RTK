import { createSlice } from '@reduxjs/toolkit';

//createSlice create reducer slice

const stuSlice = createSlice({
  name: 'stu',
  initialState: {
    name: 'Julian',
    age: 18,
    gender: 'male',
    address: 'nowhere',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
  },
});

export const { setName, setGender } = stuSlice.actions;
export const { reducer: stuReducer } = stuSlice;
