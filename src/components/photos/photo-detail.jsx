import React from 'react';

const PhotoDetail = ({ photoId }) => {
  return (
    <div className='photo-detail'>
      <div className='photo'>
        <img src={`https://picsum.photos/id/${photoId}/500`} alt={`test`} />
      </div>
      <div className='detail'></div>
    </div>
  );
};

export default PhotoDetail;
