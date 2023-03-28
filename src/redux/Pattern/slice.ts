import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PatternSliceType, ItemType, ToolbarType } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialState: PatternSliceType = {
  pattern: [],
};

const PatternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ToolbarType>) => {
      state.pattern = [...state.pattern, { id: uuidv4(), info: '', ...action.payload }];
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.pattern = state.pattern.filter((item) => item.id !== action.payload);
    },
    copyItem: (state, action: PayloadAction<ItemType>) => {
      const index = state.pattern.findIndex((pattern) => pattern.id === action.payload.id);
      const copiedItem = { ...state.pattern[index], id: uuidv4() };

      state.pattern = [
        ...state.pattern.slice(0, index + 1),
        copiedItem,
        ...state.pattern.slice(index + 1),
      ];
    },
    editItem: (state, action: PayloadAction<{ id: string; info: string }>) => {
      const index = state.pattern.findIndex((pattern) => pattern.id === action.payload.id);
      const editedItem = { ...state.pattern[index], info: action.payload.info };

      state.pattern = [
        ...state.pattern.slice(0, index),
        editedItem,
        ...state.pattern.slice(index + 1),
      ];
    },
    moveUp: (state, action: PayloadAction<ItemType>) => {
      const index = state.pattern.findIndex((item) => item.id === action.payload.id);
      if (index > 0) {
        const newPattern = [...state.pattern];
        const prevItem = newPattern[index - 1];
        const currentItem = newPattern[index];
        newPattern[index - 1] = currentItem;
        newPattern[index] = prevItem;
        state.pattern = newPattern;
      }
    },

    moveDown: (state, action: PayloadAction<ItemType>) => {
      const index = state.pattern.findIndex((item) => item.id === action.payload.id);
      if (index < state.pattern.length - 1) {
        const newPattern = [...state.pattern];
        const nextItem = newPattern[index + 1];
        const currentItem = newPattern[index];
        newPattern[index + 1] = currentItem;
        newPattern[index] = nextItem;
        state.pattern = newPattern;
      }
    },
  },
});

export const { addItem, deleteItem, copyItem, editItem, moveUp, moveDown } = PatternSlice.actions;

export default PatternSlice.reducer;
