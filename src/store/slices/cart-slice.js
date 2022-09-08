import { createSlice } from '@reduxjs/toolkit';
import { getPrice } from '../../services/model';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const getUpdatedQuantity = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }

  return arr.reduce((acc, curr) => acc + curr.quantity, 0);
};

const getUpdatedAmount = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }

  return arr.reduce((acc, curr) => {
    const { size, width, quantity } = curr;

    return acc + quantity * getPrice(width, size);
  }, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id && item.size === payload.size);
      if (item) {
        item.quantity = payload.quantity;
      } else {
        state.items.push(payload);
      }

      state.totalQuantity = getUpdatedQuantity(state.items);
      state.totalAmount = getUpdatedAmount(state.items);
    },
    removeItemFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => !(item.id === payload.id && item.size === payload.size));
      state.totalQuantity = getUpdatedQuantity(state.items);
      state.totalAmount = getUpdatedAmount(state.items);
    },
  },
});

// Actions
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.items;
export const getTotalQuantiy = (state) => state.cart.totalQuantity;
export const getTotalAmount = (state) => state.cart.totalAmount;

// Reducer
export default cartSlice.reducer;
