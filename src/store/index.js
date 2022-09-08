import cartReducer, { addItemToCart, removeitemFromCart, updateCartItem, getCartItems } from './slices/cart-slice';
import photoReducer, { setSelectedPhoto, getSelectedPhoto } from './slices/photo-slice';
import { store } from './store';

export {
  store,
  cartReducer,
  addItemToCart,
  removeitemFromCart,
  updateCartItem,
  getCartItems,
  photoReducer,
  setSelectedPhoto,
  getSelectedPhoto,
};
