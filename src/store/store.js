import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cartReducer, paginationReducer, photosReducer } from '.';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  pagination: paginationReducer,
  photos: photosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
