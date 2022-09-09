import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PhotoList, Pagination } from '.';
import { setCurrentPage } from '../store';

const Catalog = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useParams();

  /**
   * Update state every time the
   * page number in url changes.
   * This is to keep record of the
   * last visited page and load it
   * when catalog link is accessed
   */
  useEffect(() => {
    dispatch(setCurrentPage(pageNumber));
  }, [pageNumber, dispatch]);

  return (
    <div className='catalog'>
      <PhotoList />
      <Pagination
        options={{
          stepSize: 2,
          previous: true,
          next: true,
          baseLink: `/catalog`,
        }}
      />
    </div>
  );
};

export default Catalog;
