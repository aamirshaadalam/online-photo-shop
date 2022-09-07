import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faImages } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='left-content'></div>
      <div className='right-content'>
        <div className='nav-link'>
          <NavLink to='catalog'>
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
      </div>
    </div>
  );
};

export default NavBar;
