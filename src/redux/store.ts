import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import PatternReducer from './Pattern/slice';

export const store = configureStore({
  reducer: {
    pattern: PatternReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
