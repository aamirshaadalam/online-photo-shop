import React, { useState, useRef, useEffect } from 'react';
import { ImagePlaceholder } from '../common';
import { hideElements, showElements } from '../../utilities';

const PhotoCard = ({ photo }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const { getImageURL, author } = photo;

  useEffect(() => {
    if (isLoading) {
      hideElements([imgEl]);
    } else {
      showElements([imgEl]);
    }
  }, [isLoading]);

  return (
    <div className='photo-card'>
      <ImagePlaceholder show={isLoading} />
      <img ref={imgEl} src={getImageURL()} alt={author} loading='lazy' onLoad={() => setLoading(false)} />
    </div>
  );
};

export default PhotoCard;
