import { PhotoCard, DetailCard } from '.';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getCartItems } from '../store';

const PhotoDetail = () => {
  const location = useLocation();
  const { state: photo } = location;
  const options = { photo, cssClass: 'photo inset', width: 500 };
  // const items = useSelector(getCartItems);

  // const isItemInCart = () => {
  //   if (!items || items.length <= 0 || !photo) {
  //     return false;
  //   }

  //   const index = items.findIndex((item) => item.id === photo.id && item.size === photo.size);

  //   return index >= 0;
  // };

  return (
    <>
      {!!photo && (
        <div className='photo-detail'>
          <div className='card'>
            <PhotoCard options={options} />
          </div>
          <DetailCard photo={photo} />
        </div>
      )}
    </>
  );
};

export default PhotoDetail;
