import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoCard, Loader } from '.';
import { getCurrentPage, getPageSize, fetcPhotos, getLoadingStatus } from '../store';

const PhotoList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);
  const pageNumber = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    dispatch(fetcPhotos({ pageNumber, pageSize })).then((response) => setPhotos(response));
  }, [pageNumber, pageSize, dispatch]);

  const renderCards = () => {
    return photos.map((photo) => {
      const options = { photo, cssClass: 'photo', width: 200 };

      return (
        <div className='card' key={photo.id}>
          <PhotoCard options={options} />
        </div>
      );
    });
  };

  return <div className='photo-list'>{isLoading ? <Loader /> : renderCards()}</div>;
};

export default PhotoList;
