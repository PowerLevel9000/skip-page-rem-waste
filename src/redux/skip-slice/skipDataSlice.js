import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../utils/data';

const skipDataSlice = createSlice({
  name: 'skipData',
  initialState: {
    skipData: data,
    selectedSkip: null,
    modelDetail: null,
    themeStyleGird: true,
  },
  reducers: {
    setSelectedSkip: (state, action) => {
      state.selectedSkip = action.payload;
    },
    setModelDetail: (state, action) => {
      state.modelDetail = action.payload;
    },
    toggleThemeStyleGird: (state) => {
      state.themeStyleGird = !state.themeStyleGird;
    },
  },
});

export const { setSelectedSkip, setModelDetail, toggleThemeStyleGird } = skipDataSlice.actions;
export default skipDataSlice.reducer;
