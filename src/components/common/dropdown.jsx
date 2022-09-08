import React from 'react';

const Dropdown = ({ label, options, onSelectedChange, quantity }) => {
  return (
    <div className='dropdown'>
      <label>{`${label}: `}</label>
      <select name={label} id={label} value={quantity} onChange={(e) => onSelectedChange(parseInt(e.target.value, 10))}>
        {options.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
