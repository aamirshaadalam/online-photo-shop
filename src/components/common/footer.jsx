import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='text-white text-sm capitalize font-semibold'>follow us:</div>
      <NavLink to='/facebook'>
        <FontAwesomeIcon icon={faFacebook} className='fa-icon' />
      </NavLink>
      <NavLink to='/twitter'>
        <FontAwesomeIcon icon={faTwitter} className='fa-icon' />
      </NavLink>
      <NavLink to='/insta'>
        <FontAwesomeIcon icon={faInstagram} className='fa-icon' />
      </NavLink>
      <NavLink to='/youtube'>
        <FontAwesomeIcon icon={faYoutube} className='fa-icon' />
      </NavLink>
    </div>
  );
};

export default Footer;
