import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PhotoCard, Dropdown } from '.';
import { getPrice } from '../services/model';
import { getCartItems, removeItemFromCart, addItemToCart, getTotalQuantiy, getTotalAmount } from '../store';

const Cart = () => {
  const dispatch = useDispatch();
  const photos = useSelector(getCartItems);
  const totalQuantity = useSelector(getTotalQuantiy);
  const totalAmount = useSelector(getTotalAmount);

  const renderItems = () => {
    if (!photos || photos.length <= 0) {
      return <div className='empty-cart-message'>{`Your cart is empty`}</div>;
    }

    return photos.map((photo, index) => {
      const cardOptions = { photo, cssClass: 'photo', width: 200 };
      const { author, id, quantity, size, width } = photo;

      return (
        <div className='item' key={index}>
          <div className='image'>
            <PhotoCard options={cardOptions} />
          </div>
          <div className='detail'>
            <div className='info'>
              <span className='title'>{`${author} - ${id}`}</span>
              <span className='sub-section'>size: {`${size}`}</span>
              <Dropdown
                label='Quantity'
                options={[1, 2, 3, 4, 5]}
                quantity={quantity}
                onSelectedChange={(updatedQuantity) => dispatch(addItemToCart({ ...photo, quantity: updatedQuantity }))}
              />
              <span className='remove-from-cart' onClick={() => dispatch(removeItemFromCart({ id, size }))}>
                remove
              </span>
            </div>
            <div className='price'>${quantity * getPrice(width, size)}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='item-heading'>shopping cart</div>
        <div className='item-price'>price</div>
      </div>
      <div className='items'>{renderItems()}</div>
      <div className='cart-footer'>
        <span className='f-text'>{`Total (${totalQuantity} items):`}</span>
        <span>{`$${totalAmount}`}</span>
      </div>
    </div>
  );
};

export default Cart;
