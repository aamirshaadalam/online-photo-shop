import axios from 'axios';
import { handleError, handleResponse } from './index';

const BASE_URL = 'https://picsum.photos/';

/**
 *
 * @param {string} resource
 * @returns
 */
const getAll = async (resource) => {
  try {
    const response = await axios.get(`${BASE_URL}/${resource}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 *
 * @param {string} resource
 * @param {number|string} id
 * @returns
 */
const get = async (resource, id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${resource}/${id}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 *
 * @param {string} resource
 * @param {object} model
 * @returns
 */
const post = async (resource, model) => {
  try {
    const response = await axios.post(`${BASE_URL}/${resource}`, model);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 *
 * @param {string} resource
 * @param {object} model
 * @returns
 */
const put = async (resource, model) => {
  try {
    const response = await axios.put(`${BASE_URL}/${resource}`, model);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 *
 * @param {string} resource
 * @param {object} model
 * @returns
 */
const patch = async (resource, model) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${resource}`, model);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 *
 * @param {string} resource
 * @param {number|string} id
 * @returns
 */
const remove = async (resource, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${resource}`, id);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const apiProvider = {
  get,
  getAll,
  patch,
  post,
  put,
  remove,
};
