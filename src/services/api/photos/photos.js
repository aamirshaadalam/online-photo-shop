import { api } from '../utilities';

export const getAllPhotos = (page, limit) => {
  const url = `v2/list?page=${page}&limit=${limit}`;
  return api.getAll(url);
};

export const getPhoto = () => {};
