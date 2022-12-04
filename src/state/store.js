import { configureStore } from '@reduxjs/toolkit'
import posteSlice from './postesSlice'


export const store = configureStore({
  reducer: {
    postes: posteSlice,
  },
});

