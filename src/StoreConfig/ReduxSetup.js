// contains code for creating reducer 

import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../Jobredux/JobKit';

export const ReduxSetup = configureStore({
  reducer: {
    jobs: jobsReducer
    
  },
});
