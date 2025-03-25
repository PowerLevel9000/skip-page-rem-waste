import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../utils/data';

const skipDataSlice = createSlice({
  name: 'skipData',
  initialState: {
    skipData: data,
    selectedSkip: null,
    detail: null,
    model: false,
    themeStyleGird: true,
  },
  reducers: {
    setSelectedSkip: (state, action) => {
      state.detail = null;
      state.selectedSkip = action.payload;
    },
    setModelDetail: (state, action) => {
      state.selectedSkip = null;
      state.detail = action.payload;
    },
    toggleThemeStyleGird: (state) => {
      state.themeStyleGird = !state.themeStyleGird;
    },
    toggleModelView: (state) => {
      if (state.detail !== null) {
        state.detail = null;
      }
      state.model = !state.model;
    },
  },
});

export const {
  setSelectedSkip, setModelDetail, toggleThemeStyleGird, toggleModelView,
} = skipDataSlice.actions;
export default skipDataSlice.reducer;
