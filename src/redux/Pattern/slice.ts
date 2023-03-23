import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PatternSliceType, ItemType } from './types';

const initialState: PatternSliceType = {
  pattern: [],
};

const PatternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      state.pattern = [...state.pattern, action.payload];
    },
  },
});

export const { addItem } = PatternSlice.actions;

export default PatternSlice.reducer;
