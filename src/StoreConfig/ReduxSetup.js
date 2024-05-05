// contains code for creating reducer 

import { configureStore } from '@reduxjs/toolkit';
import JobKit from '../Jobredux/JobKit';

export const ReduxSetup = configureStore({
  reducer: {
    jobs: JobKit
    
  },
});
