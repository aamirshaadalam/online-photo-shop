import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  getCartItems,
  getTotalQuantiy,
  getTotalAmount,
} from './slices/cart-slice';

import paginationReducer, { getCurrentPage, setCurrentPage, setPageSize, getPageSize } from './slices/page-slice';

import { store, persistor } from './store';

export {
  store,
  persistor,
  cartReducer,
  addItemToCart,
  removeItemFromCart,
  getCartItems,
  getTotalQuantiy,
  getTotalAmount,
  paginationReducer,
  getCurrentPage,
  setCurrentPage,
  setPageSize,
  getPageSize,
};
