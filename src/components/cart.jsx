import React from 'react';
import { PhotoCard, Dropdown } from '.';
import { getPrice } from '../services/model';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, removeItemFromCart } from '../store';

const Cart = () => {
  const dispatch = useDispatch();
  const photos = useSelector(getCartItems);

  const getTotalCount = () => {
    if (!photos || photos.length <= 0) {
      return 0;
    }

    return photos.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const getTotalCost = () => {
    if (!photos || photos.length <= 0) {
      return 0;
    }

    return photos.reduce((acc, curr) => {
      const { quantity, width, size } = curr;

      return acc + quantity * getPrice(width, size);
    }, 0);
  };

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
              <Dropdown label='Quantity' options={[1, 2, 3, 4, 5]} quantity={quantity} />
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
        <span className='f-text'>{`Total (${getTotalCount()} items):`}</span>
        <span>{`$${getTotalCost()}`}</span>
      </div>
    </div>
  );
};

export default Cart;
