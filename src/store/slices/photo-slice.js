import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: null,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setSelectedPhoto: (state, { payload }) => {
      state.selected = payload;
    },
  },
});

// Actions
export const { setSelectedPhoto } = photoSlice.actions;

// Selectors
export const getSelectedPhoto = (state) => state.photo.selected;

// Reducer
export default photoSlice.reducer;
