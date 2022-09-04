import React, { useEffect, useState } from 'react';
import PhotoCard from './photo-card';
import { getPhotosApi } from '../services/api/photos/photos';
import { parsePhotos } from '../services/model';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosApi = getPhotosApi('v2/list?page=1&limit=25', ['getAll']);
    photosApi.getAll().then((response) => {
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
