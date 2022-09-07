import PhotoCard from './photo-card';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const PhotoDetail = ({ photo }) => {
  const options = { photo, cssClass: 'photo inset', width: 500 };
  const { author, originalWidth, originalHeight, id } = photo;

  return (
    <div className='photo-detail'>
      <div className='card'>
        <PhotoCard options={options} />
      </div>
      <div className='detail'>
        <h1>{`${author} - ${id}`}</h1>
        <h2>
          Author: <span className='value'>{author}</span>
        </h2>
        <span className='title'>
          Width:<span className='value'>{originalWidth} px</span>
        </span>
        <span className='title'>
          Height: <span className='value'>{originalHeight} px</span>
        </span>
        <span className='title'>
          Price: <span className='value'>$ {`50.0`}</span>
        </span>
        <span className='title'>Size:</span>
        <div className='chips'>
          <div className='chip selected'>small</div>
          <div className='chip'>medium</div>
          <div className='chip'>large</div>
          <div className='chip'>x-large</div>
        </div>
        <span className='title'>Quantity:</span>
        <div className='quantity-container'>
          <MinusSmallIcon className='q-icon' />
          <input />
          <PlusSmallIcon className='q-icon' />
        </div>
        <div className='btn-cont'>
          <button className='add-to-cart'>
            <FontAwesomeIcon icon={faCartShopping} className='b-icon' />
            <span className='b-text'>add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
