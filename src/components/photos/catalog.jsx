import { PhotoList } from './index';
import { Pagination } from '../common';

const Catalog = () => {
  return (
    <div className='catalog'>
      <PhotoList />
      <Pagination />
    </div>
  );
};

export default Catalog;
