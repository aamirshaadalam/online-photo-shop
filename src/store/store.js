import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '.';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
