import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, fachevron } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ options }) => {
  /**
   * options parameter is used to determine the
   * page numbers and the navigation buttons for
   * the pagination control.
   */
  const { currentPage, stepSize, first, last, previous, next } = options;

  const renderPageNumbers = () => {
    /**
     * Creates HTML for showing page numbers.
     * Page Numbers to show: currentPage +/- stepSize
     * If (currentPage - stepSize) is negative, start from page 1
     */
    const pages = [];
    let index = currentPage - stepSize > 0 ? currentPage - stepSize : 1;

    while (pages.length <= 2 * stepSize) {
      const className = `page-number ${currentPage === index ? 'current' : ''}`;

      pages.push(
        <div className={className} key={index}>
          {index}
        </div>
      );

      index++;
    }

    return pages;
  };

  return (
    <div className='pagination-container'>
      {!!first && <ChevronDoubleLeftIcon className='navigator' />}
      {!!previous && <ChevronLeftIcon className='navigator' />}
      {renderPageNumbers()}
      {!!next && <ChevronRightIcon className='navigator' />}
      {!!last && <ChevronDoubleRightIcon className='navigator' />}
    </div>
  );
};

export default Pagination;
