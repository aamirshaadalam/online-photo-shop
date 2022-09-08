import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='text-white text-sm capitalize font-semibold'>follow us:</div>
      <FontAwesomeIcon icon={faFacebook} className='fa-icon' />
      <FontAwesomeIcon icon={faTwitter} className='fa-icon' />
      <FontAwesomeIcon icon={faInstagram} className='fa-icon' />
      <FontAwesomeIcon icon={faYoutube} className='fa-icon' />
    </div>
  );
};

export default Footer;
