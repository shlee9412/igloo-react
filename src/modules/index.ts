import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter';

import { combineReducers } from "redux";
import { persistCombineReducers, PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['counter']
  // blacklist: ['counter']
};

const reducers = combineReducers({
  counter: counterReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

// const persistedReducer = persistCombineReducers(persistConfig, {
//   counter: counterReducer
// });


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefualtMiddleware => (
    getDefualtMiddleware().concat(logger)
  )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
