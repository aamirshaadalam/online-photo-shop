const BASE_URL = 'https://picsum.photos/id';

export const getImageURL = (imageWidth, imageHeight, id, defaultURL) => {
  if (imageWidth && imageHeight) {
    return `${BASE_URL}/${id}/${imageWidth}/${imageHeight}`;
  } else if (imageWidth) {
    return `${BASE_URL}/${id}/${imageWidth}`;
  }

  return defaultURL;
};

export const getPrice = (width, size) => {
  const basePrice = Math.max(Math.round(width / 1000), 2);

  switch (size) {
    case 'x-large':
      return basePrice * 4;
    case 'large':
      return basePrice * 3;
    case 'medium':
      return basePrice * 2;
    case 'small':
    default:
      return basePrice;
  }
};
