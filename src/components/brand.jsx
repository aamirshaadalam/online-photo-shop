import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon, faCameraRetro } from '.';

const Brand = () => {
  return (
    <NavLink to={`/catalog/1`}>
      <div className='brand'>
        <FontAwesomeIcon icon={faCameraRetro} className='brand-icon' />
        <span className='brand-text'>Online Photo Shop</span>
      </div>
    </NavLink>
  );
};

export default Brand;
