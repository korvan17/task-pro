import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filtersReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './boards/slice';
import { columnsReducer } from './columns/columnsSlice';
import { cardsReducer } from './сard/сardSlice';
import { displayReducer } from './displayType/displaySlice';
import { modalReducer } from './modalSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  authReducer
);

const persistedReducerBoards = persistReducer(
  {
    key: 'boards',
    storage,
  },
  boardsReducer
);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    auth: persistedReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    displays: displayReducer,
    boards: persistedReducerBoards,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
