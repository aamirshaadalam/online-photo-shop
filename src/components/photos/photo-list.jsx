import React, { useEffect, useState } from 'react';
import { PhotoCard } from './index';
import { getAllPhotos } from '../../services/api/photos';
import { parsePhotos } from '../../services/model';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAllPhotos(1, 25).then((response) => {
      setPhotos(parsePhotos(response));
    });
  }, []);

  return (
    <div className='photo-list'>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
