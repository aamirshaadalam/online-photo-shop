import React from 'react';

const NavBar = ({ leftContent, rightContent }) => {
  return (
    <div className='nav-bar'>
      <div className='left-content'>{leftContent}</div>
      <div className='right-content'>{rightContent}</div>
    </div>
  );
};

export default NavBar;
