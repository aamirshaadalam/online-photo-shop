const BASE_URL = 'https://picsum.photos/id';

export class Photo {
  constructor(photo) {
    const { id, author, width, height, url, download_url } = photo;

    this.id = id;
    this.author = author;
    this.width = width;
    this.height = height;
    this.url = url;
    this.getImageURL = getImageURL(id, download_url);
  }
}

export const getImageURL = (id, defaultURL) => {
  return (width, height) => {
    if (width && height) {
      return `${BASE_URL}/${id}/${width}/${height}`;
    } else if (width) {
      return `${BASE_URL}/${id}/${width}`;
    }

    return defaultURL;
  };
};

export const parsePhotos = (photos) => {
  if (photos && photos.length > 0) {
    return photos.map((photo) => new Photo(photo));
  }

  return [];
};
