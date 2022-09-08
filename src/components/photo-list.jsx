import React, { useEffect, useState } from 'react';
import { PhotoCard, Loader } from '.';
import { getAllPhotos } from '../services/api/photos';

const PhotoList = ({ pageNumber, pageSize }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllPhotos(pageNumber, pageSize)
      .then((response) => {
        setPhotos(response);
      })
      .finally(() => setLoading(false));
  }, [pageNumber, pageSize]);

  const renderCards = () => {
    return photos.map((photo) => {
      const options = { photo, cssClass: 'photo shadow clickable', width: 200 };

      return (
        <div className='card' key={photo.id}>
          <PhotoCard options={options} />
        </div>
      );
    });
  };

  return <div className='photo-list'>{loading ? <Loader /> : renderCards()}</div>;
};

export default PhotoList;
