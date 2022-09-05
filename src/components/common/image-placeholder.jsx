import React from 'react';
import PlaceholderImage from '../../assets/placeholder-image.png';

const ImagePlaceholder = ({ show }) => {
  return (
    <>
      {show && (
        <div className='image-placeholder'>
          <img src={PlaceholderImage} alt='loading' />
        </div>
      )}
    </>
  );
};

export default ImagePlaceholder;
