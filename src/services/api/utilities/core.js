import { apiProvider } from './index';

/**
 * Sample options object
 * 
 {
  getAll: true|false,
  get: true|false,
  post: true|false,
  put: true|false,
  patch: true|false,
  remove: true|false,
  url: url,
}
*/

export class CoreApi {
  constructor(options) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url);
      };
    }

    if (options.get) {
      this.get = (id) => {
        return apiProvider.get(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model) => {
        return apiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}
