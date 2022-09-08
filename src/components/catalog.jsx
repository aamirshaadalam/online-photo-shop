import { PhotoList, Pagination } from '.';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Catalog = () => {
  // const [page, setPage] = useState(1);
  const { pageNumber } = useParams();

  // useEffect(() => {
  //   if (pageNumber || !isNaN(parseInt(pageNumber, 10))) {
  //     setPage(parseInt(pageNumber, 10));
  //   }
  // }, [pageNumber]);

  return (
    <div className='catalog'>
      <PhotoList pageNumber={parseInt(pageNumber, 10) || 1} pageSize={25} />
      <Pagination
        options={{
          currentPage: parseInt(pageNumber, 10) || 1,
          stepSize: 2,
          previous: true,
          next: true,
          baseLink: `/catalog/`,
        }}
      />
    </div>
  );
};

export default Catalog;
