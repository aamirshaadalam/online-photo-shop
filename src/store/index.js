import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  getCartItems,
  getTotalQuantiy,
  getTotalAmount,
} from './slices/cart-slice';
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
};
