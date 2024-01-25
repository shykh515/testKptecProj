// store.ts
import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import reduxStorage from './storage';
import LoadingSlice, { LoadingSliceState } from './Slices/LoadingSlice';
import UserProfileSlice, { UserProfileSliceState } from './Slices/UserProfileSlice';
import NewPostSlice, { NewPostSliceState } from './Slices/NewPostSlice';


// RootState type
export type RootState = {
  LoadingSlice: LoadingSliceState;
  UserProfileSlice: UserProfileSliceState;
  NewPostSlice: NewPostSliceState;

};

const persistConfig = {
  key: 'user',
  version: 1,
  storage: reduxStorage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, UserProfileSlice);

const rootReducer = combineReducers({
  LoadingSlice,
  UserProfileSlice: persistedReducer,
  NewPostSlice,

});

const middlewares: Middleware[] = [
  // Add other middlewares if needed
];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export default store;
