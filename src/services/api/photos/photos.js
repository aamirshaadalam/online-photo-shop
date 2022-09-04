import { CoreApi } from '../utilities';

/**
 * List of valid actions:
 * ['get', 'getAll', 'patch', 'post', 'put', 'remove']
 * @param {string} url
 * @param {string[]} actions
 * @returns
 */
export const getPhotosApi = (url, actions = []) => {
  const options = { url };
  actions.forEach((action) => (options[action] = true));
  return new CoreApi(options);
};
