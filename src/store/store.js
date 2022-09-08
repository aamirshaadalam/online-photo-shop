import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, photoReducer } from '.';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    photo: photoReducer,
  },
});
