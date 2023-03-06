import { configureStore } from '@reduxjs/toolkit';
import IdStore from './IdStore';

export const store = configureStore({
  reducer: {
    iditem: IdStore,
  },
});
