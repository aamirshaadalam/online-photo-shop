import React, { useState, useRef, useEffect } from 'react';
import { ImagePlaceholder } from '.';
import { hideElements, showElements } from '../utilities';
import { useNavigate } from 'react-router-dom';
import { getImageURL } from '../services/model';
import { useDispatch } from 'react-redux';
import { setSelectedPhoto } from '../store';

const PhotoCard = ({ options }) => {
  const [isLoading, setLoading] = useState(true);
  const imgEl = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { photo, cssClass, width, height } = options;
  const { author, id, downloadURL } = photo;

  const showDetail = () => {
    dispatch(setSelectedPhoto(photo));
    navigate(`/photo/detail`);
  };

  useEffect(() => {
    if (isLoading) {
      hideElements([imgEl]);
    } else {
      showElements([imgEl]);
    }
  }, [isLoading]);

  return (
    <div className={cssClass} onClick={showDetail}>
      <ImagePlaceholder show={isLoading} />
      <img
        ref={imgEl}
        src={getImageURL(width, height, id, downloadURL)}
        alt={author}
        loading='lazy'
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default PhotoCard;
