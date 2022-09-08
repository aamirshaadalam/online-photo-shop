import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, FontAwesomeIcon, faCartShopping, Chips } from '.';
import { getPrice } from '../services/model';
import { addItemToCart, getCartItems, updateCartItem } from '../store';

const DetailCard = ({ photo }) => {
  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { author, id, width, height } = photo;
  const items = useSelector(getCartItems);

  useEffect(() => {
    const { size, quantity } = photo;
    if (size) {
      setSize(size);
    }

    if (quantity) {
      setQuantity(quantity);
    }
  }, [photo]);

  const isItemInCart = () => {
    if (!items || items.length <= 0 || !photo) {
      return false;
    }

    const index = items.findIndex((item) => item.id === id && item.size === size);

    return index >= 0;
  };

  const addToCart = () => {
    if (isItemInCart()) {
      dispatch(updateCartItem({ ...photo, size, quantity }));
    } else {
      dispatch(addItemToCart({ ...photo, size, quantity }));
    }
  };

  return (
    <div className='detail-card'>
      <h1>{`${author} - ${id}`}</h1>
      <h2>
        Author: <span className='value'>{author}</span>
      </h2>
      <span className='title'>
        Width:<span className='value'>{width} px</span>
      </span>
      <span className='title'>
        Height: <span className='value'>{height} px</span>
      </span>
      <span className='title'>
        Price: <span className='value'>${getPrice(width, size)}</span>
      </span>
      <span className='title'>Size:</span>
      <Chips setImageSize={setSize} selectedSize={size} options={['small', 'medium', 'large', 'x-large']} />
      <Dropdown
        label='Quantity'
        options={[1, 2, 3, 4, 5]}
        onSelectedChange={(quantity) => setQuantity(quantity)}
        quantity={quantity}
      />
      <div className='btn-cont'>
        <button className='add-to-cart' onClick={addToCart}>
          <FontAwesomeIcon icon={faCartShopping} className='b-icon' />
          <span className='b-text'>add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
