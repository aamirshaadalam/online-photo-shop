import { PhotoCard, DetailCard } from '.';
import { useLocation } from 'react-router-dom';

const PhotoDetail = () => {
  const location = useLocation();
  const { state: photo } = location;
  const options = { photo, cssClass: 'photo inset', width: 500 };

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
