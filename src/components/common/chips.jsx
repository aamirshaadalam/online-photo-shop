import React from 'react';

const Chips = ({ setImageSize, options, selectedSize }) => {
  const getSelectedClass = (imageSize) => {
    return imageSize === selectedSize ? 'selected' : '';
  };

  return (
    <div className='chips'>
      {options.map((option) => {
        return (
          <div className={`chip ${getSelectedClass(option)}`} key={option} onClick={() => setImageSize(option)}>
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
