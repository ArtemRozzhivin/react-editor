import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PatternSliceType, ItemType, ToolbarType } from './types';

const initialState: PatternSliceType = {
  pattern: [],
};

const PatternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ToolbarType>) => {
      const id = state.pattern.length;

      state.pattern = [...state.pattern, { id, info: '', ...action.payload }];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      let copyPattern = state.pattern;
      copyPattern.splice(action.payload, 1);

      for (let i = 0; i < copyPattern.length; i++) {
        copyPattern[i].id = i;
      }
      state.pattern = copyPattern;
    },

    copyItem: (state, action: PayloadAction<ItemType>) => {
      let copyPattern = state.pattern;
      const newItem = action.payload;

      copyPattern.splice(newItem.id, 0, newItem);

      for (let i = 0; i < copyPattern.length; i++) {
        copyPattern[i].id = i;
      }
      state.pattern = copyPattern;
    },
  },
});

export const { addItem, deleteItem, copyItem } = PatternSlice.actions;

export default PatternSlice.reducer;
