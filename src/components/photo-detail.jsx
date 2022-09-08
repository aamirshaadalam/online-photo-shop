import { PhotoCard, DetailCard } from '.';
import { useSelector } from 'react-redux';
import { getSelectedPhoto } from '../store';

const PhotoDetail = () => {
  const photo = useSelector(getSelectedPhoto);
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
