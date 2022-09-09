import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <span className='nf-header'>Oops! Nothing here.</span>
      <span className='nf-text'>
        Let's get you back to
        <NavLink to='/catalog/1' className='nf-nav'>
          Home
        </NavLink>
      </span>
    </div>
  );
};

export default NotFound;
