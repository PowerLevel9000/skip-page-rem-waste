import { configureStore } from '@reduxjs/toolkit';
import skipDataReducer from './skip-slice/skipDataSlice';

export default configureStore({
  reducer: {
    skipData: skipDataReducer,
  },
});
