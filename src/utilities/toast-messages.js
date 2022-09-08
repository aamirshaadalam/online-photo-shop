import { toast } from 'react-toastify';

export const showErrorToast = (message = 'Error') => {
  toast.error(message);
};

export const showSuccessToast = (message = 'Success') => {
  toast.success(message);
};

export const showWarningToast = (message = 'Warning') => {
  toast.warn(message);
};

export const showInfoToast = (message = 'Info') => {
  toast.info(message);
};

export const showToast = (message = 'Default') => {
  toast(message);
};
