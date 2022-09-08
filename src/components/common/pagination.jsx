import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Pagination = ({ options }) => {
  const { currentPage, stepSize, previous, next, baseLink } = options;
  const renderPageNumbers = () => {
    let satrtIndex = currentPage - stepSize > 0 ? currentPage - stepSize : 1;

    return Array.from(Array(2 * stepSize + 1), (_, index) => {
      const pageNumber = index + satrtIndex;
      const className = `page-number ${currentPage === pageNumber ? 'current' : ''}`;

      return (
        <NavLink to={getLink(pageNumber)} key={pageNumber}>
          <div className={className}>{pageNumber}</div>
        </NavLink>
      );
    });
  };

  const getLink = (pageNumber) => {
    if (!pageNumber || pageNumber <= 0) {
      return `${baseLink}/1`;
    } else {
      return `${baseLink}/${pageNumber}`;
    }
  };

  return (
    <div className='pagination-container'>
      <NavLink to={getLink(currentPage - 1)}>
        {!!previous && <ChevronLeftIcon className={`navigator ${currentPage === 1 ? 'current' : ''}`} />}
      </NavLink>
      {renderPageNumbers()}
      <NavLink to={getLink(currentPage + 1)}>{!!next && <ChevronRightIcon className='navigator' />}</NavLink>
    </div>
  );
};

export default Pagination;
