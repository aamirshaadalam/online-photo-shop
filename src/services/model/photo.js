export class Photo {
  constructor(photo) {
    const { id, author, width, height, url, download_url } = photo;
    this.id = id;
    this.author = author;
    this.width = width;
    this.height = height;
    this.url = url;
    this.downloadUrl = download_url;
  }
}
