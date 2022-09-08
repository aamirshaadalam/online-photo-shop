import React, { useEffect, useState } from 'react';
import { PhotoCard } from '.';
import { getAllPhotos } from '../services/api/photos';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAllPhotos(1, 25).then((response) => {
      setPhotos(response);
    });
  }, []);

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

  return <div className='photo-list'>{renderCards()}</div>;
};

export default PhotoList;
