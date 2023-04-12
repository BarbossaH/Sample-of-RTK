import { configureStore } from '@reduxjs/toolkit';

import { stuReducer } from './stuSlice';
import { schReducer } from './schSlice';

const store = configureStore({
  reducer: {
    student: stuReducer,
    school: schReducer,
  },
});

export default store;
