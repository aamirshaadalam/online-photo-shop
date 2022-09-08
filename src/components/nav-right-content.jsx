import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon, faCartShopping, faImages } from '.';

const NavRightContent = () => {
  return (
    <>
      <div className='nav-link'>
        <NavLink to='catalog/1'>
          <FontAwesomeIcon icon={faImages} className='icon' />
          catalog
        </NavLink>
      </div>
      <div className='nav-link'>
        <NavLink to='cart'>
          <FontAwesomeIcon icon={faCartShopping} className='icon' />
          cart
        </NavLink>
      </div>
    </>
  );
};

export default NavRightContent;
