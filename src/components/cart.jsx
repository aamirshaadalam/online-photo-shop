import React from 'react';
import { PhotoCard, Dropdown } from '.';
import { getPrice } from '../services/model';
import { useSelector } from 'react-redux';
import { getCartItems } from '../store';
import { getArraySum } from '../utilities';

const Cart = () => {
  const photos = useSelector(getCartItems);

  const getTotalCount = () => {
    if (!photos || photos.length <= 0) {
      return 0;
    }

    return photos.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const renderItems = () => {
    if (!photos || photos.length <= 0) {
      return <div className='empty-cart-message'>{`Your cart is empty`}</div>;
    }

    return photos.map((photo,index) => {
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
              <Dropdown label='Quantity' options={[1, 2, 3, 4, 5]} quantity={quantity} />
              <span className='remove-from-cart'>remove</span>
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
        <span className='f-text'>{`Total (${getArraySum(photos, (item) => item.quantity)} items):`}</span>
        <span>{`$${getArraySum(photos, (item) => item.quantiy * getPrice(item.width, item.size))}`}</span>
      </div>
    </div>
  );
};

export default Cart;
