import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='left-content'></div>
      <div className='right-content'>
        <ShoppingCartIcon className='icon' />
      </div>
    </div>
  );
};

export default NavBar;
