const BASE_URL = 'https://picsum.photos/id';

export class Photo {
  constructor(photo) {
    const { id, author, width, height, url, download_url } = photo;

    this.id = id;
    this.author = author;
    this.originalWidth = width;
    this.originalHeight = height;
    this.url = url;
    this.getImageURL = (imageWidth, imageHeight) => {
      if (imageWidth && imageHeight) {
        return `${BASE_URL}/${id}/${imageWidth}/${imageHeight}`;
      } else if (imageWidth) {
        return `${BASE_URL}/${id}/${imageWidth}`;
      }

      return download_url;
    };
  }
}
