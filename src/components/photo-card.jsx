import { NavLink } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import { ImagePlaceholder } from '.';
import { getImageURL } from '../services/model';
import { hideElements, showElements } from '../utilities';

const PhotoCard = ({ options }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const { photo, cssClass, width, height } = options;
  const { author, id, downloadURL } = photo;

  useEffect(() => {
    if (isLoading) {
      hideElements([imgEl]);
    } else {
      showElements([imgEl]);
    }
  }, [isLoading]);

  return (
    <NavLink to='/photo/detail' state={photo}>
      <div className={cssClass}>
        <ImagePlaceholder show={isLoading} />
        <img
          ref={imgEl}
          src={getImageURL(width, height, id, downloadURL)}
          alt={author}
          loading='lazy'
          onLoad={() => setLoading(false)}
        />
      </div>
    </NavLink>
  );
};

export default PhotoCard;
