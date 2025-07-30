import { configureStore } from '@reduxjs/toolkit';
import uploadReducer from './uploadSlice';

const store = configureStore({
  reducer: {
    upload: uploadReducer,
  },
});

export default store;
