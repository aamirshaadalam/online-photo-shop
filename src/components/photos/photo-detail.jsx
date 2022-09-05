import React from 'react';
import { ImagePlaceholder } from '../common';

const PhotoDetail = ({ photoId }) => {
  return (
    <div className='photo-detail'>
      <div className='photo'>
        {/* <ImagePlaceholder show={true} /> */}
        <img src={`https://picsum.photos/id/${photoId}/500`} alt={`test`} />
      </div>
      <div className='detail'></div>
    </div>
  );
};

export default PhotoDetail;
