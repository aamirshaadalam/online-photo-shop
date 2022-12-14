import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon, faCartShopping, faImages, BadgeIcon } from '.';
import { getCurrentPage, getTotalQuantiy } from '../store';

const NavRightContent = () => {
  const totalQuantity = useSelector(getTotalQuantiy);
  const pageNumber = useSelector(getCurrentPage);

  return (
    <>
      <div className='nav-link'>
        <NavLink to={`catalog/${pageNumber}`}>
          <FontAwesomeIcon icon={faImages} className='icon' />
          catalog
        </NavLink>
      </div>
      <div className='nav-link'>
        <NavLink to='cart'>
          <BadgeIcon iconName={faCartShopping} count={totalQuantity} />
        </NavLink>
      </div>
    </>
  );
};

export default NavRightContent;
