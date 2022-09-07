import React, { useState, useRef, useEffect } from 'react';
import { ImagePlaceholder } from '../common';
import { hideElements, showElements } from '../../utilities';
import { useNavigate } from 'react-router-dom';

const PhotoCard = ({ options }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const navigate = useNavigate();
  const { photo, cssClass, width, height } = options;
  const { getImageURL, author, id } = photo;

  useEffect(() => {
    if (isLoading) {
      hideElements([imgEl]);
    } else {
      showElements([imgEl]);
    }
  }, [isLoading]);

  return (
    <div className={cssClass} onClick={() => navigate(`/photo/detail/${id}`)}>
      <ImagePlaceholder show={isLoading} />
      <img ref={imgEl} src={getImageURL(width, height)} alt={author} loading='lazy' onLoad={() => setLoading(false)} />
    </div>
  );
};

export default PhotoCard;
