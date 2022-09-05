import React from 'react';

const ImagePlaceholder = ({ show }) => {
  return (
    <>
      {show && (
        <div className='img-placeholder'>
          <div className='animate'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePlaceholder;
