import { PhotoList } from './index';
import { Pagination } from '../common';

const Catalog = () => {
  return (
    <div className='catalog'>
      <PhotoList />
      <Pagination options={{ currentPage: 3, stepSize: 2, first: true, last: false, previous: true, next: true }} />
    </div>
  );
};

export default Catalog;
