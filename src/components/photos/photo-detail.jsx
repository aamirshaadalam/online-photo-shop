import PhotoCard from './photo-card';

const PhotoDetail = ({ photo }) => {
  const options = { photo, cssClass: 'photo inset', width: 500 };
  const { author, originalWidth, originalHeight } = photo;

  return (
    <div className='photo-detail'>
      <div className='card'>
        <PhotoCard options={options} />
      </div>
      <div className='detail'>
        <h1>Image Title</h1>
        <h2>Author: {author}</h2>
        <span>Original Width: {originalWidth}px</span>
        <span>Original Height: {originalHeight}px</span>
        <span>Price: $ {`50.0`}</span>
        <div className='chips'>
          <div className='chip'>256 X 256</div>
          <div className='chip'>512 X 512</div>
          <div className='chip'>1024 X 1024</div>
          <div className='chip'>2048 X 2048</div>
        </div>
        <input />
        <button className='add-to-cart'>add to cart</button>
      </div>
    </div>
  );
};

export default PhotoDetail;
