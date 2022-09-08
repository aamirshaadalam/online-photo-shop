import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BadgeIcon = ({ iconName, count }) => {
  return (
    <button type='button' className='badge-cont-btn'>
      <FontAwesomeIcon icon={iconName} className='icon' />
      {count > 0 ? <div className='badge-notification'>{count}</div> : null}
    </button>
  );
};

export default BadgeIcon;
