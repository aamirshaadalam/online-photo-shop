import { showErrorToast } from '../../../utilities';

export function handleResponse(response) {
  if (response.results) {
    return response.results;
  }

  if (response.data) {
    return response.data;
  }

  return response;
}

export function handleError(error) {
  showErrorToast(error.message);

  if (error.data) {
    return error.data;
  }
  return error;
}
