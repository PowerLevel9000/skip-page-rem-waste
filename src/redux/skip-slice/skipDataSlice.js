import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../utils/data';

const skipDataSlice = createSlice({
  name: 'skipData',
  initialState: {
    skipData: data,
    SelectedSkip: null,
  },
  reducers: {
    setSelectedSkip: (state, action) => {
      state.SelectedSkip = action.payload;
    },
  },
});

export const { setSelectedSkip } = skipDataSlice.actions;
export default skipDataSlice.reducer;
