import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = () => {
  return (
    <div className='pagination-container'>
      <ChevronLeftIcon className='navigator' />
      <ChevronRightIcon className='navigator' />
    </div>
  );
};

export default Pagination;
