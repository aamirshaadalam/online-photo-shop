import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
  getCartItems,
} from './slices/cart-slice';
import { store } from './store';

export { store, cartReducer, addItemToCart, removeItemFromCart, updateCartItem, getCartItems };
