import React, { useState, useRef, useEffect } from 'react';
import { ImagePlaceholder } from '../common';
import { hideElements, showElements } from '../../utilities';

const PhotoCard = ({ photo }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const divEl = useRef(null);
  const { imageURL, author } = photo;

  useEffect(() => {
    if (isLoading) {
      hideElements([imgEl, divEl]);
    } else {
      showElements([imgEl, divEl]);
    }
  }, [isLoading]);

  return (
    <>
      <ImagePlaceholder show={isLoading} />
      <div ref={divEl} className='photo-card'>
        <img ref={imgEl} src={imageURL} alt={author} loading='lazy' onLoad={() => setLoading(false)} />
      </div>
    </>
  );
};

export default PhotoCard;
