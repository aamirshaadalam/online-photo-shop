import { useParams } from 'react-router-dom';
import { PhotoList, Pagination } from '.';

const Catalog = () => {
  const { pageNumber } = useParams();

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
