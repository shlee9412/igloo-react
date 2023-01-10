import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: getDefualtMiddleware => (
    getDefualtMiddleware().concat(logger)
  )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
