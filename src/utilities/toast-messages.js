import { toast } from 'react-toastify';

const config = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showErrorToast = (message = 'Error') => {
  toast.error(message, config);
};

export const showSuccessToast = (message = 'Success') => {
  toast.success(message, config);
};

export const showWarningToast = (message = 'Warning') => {
  toast.warn(message, config);
};

export const showInfoToast = (message = 'Info') => {
  toast.info(message, config);
};

export const showToast = (message = 'Default') => {
  toast(message, config);
};
