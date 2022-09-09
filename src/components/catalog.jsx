import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PhotoList, Pagination } from '.';
import { setCurrentPage } from '../store';

const Catalog = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useParams();

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
