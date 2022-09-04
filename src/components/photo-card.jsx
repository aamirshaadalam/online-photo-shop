import React, { useState, useRef, useEffect } from 'react';
import ImagePlaceholder from './image-placeholder';
import { setDisplay } from '../utilities';

const PhotoCard = ({ photo }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const divEl = useRef(null);
  const { downloadUrl, author } = photo;

  useEffect(() => {
    if (isLoading) {
      setDisplay('none', [imgEl, divEl]);
    } else {
      setDisplay('block', [imgEl, divEl]);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <ImagePlaceholder />}
      <div ref={divEl} className='photo-card'>
        <img ref={imgEl} src={downloadUrl} alt={author} loading='lazy' onLoad={() => setLoading(false)} />
      </div>
    </>
  );
};

export default PhotoCard;
