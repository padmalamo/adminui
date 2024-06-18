import { toast } from "react-toastify";


export const Toast = {
  success: (message) => {
    toast.success(message);
  },
  info: (message, props = {}) => {
    toast.info(message, props);
  },
  warning: (message) => {
    toast.warning(message);
  },
  error: (message, props = {}) => {
    toast.error(message, {
      autoClose: 10000,
      ...props
    });
  },
  dismiss: () => {
    toast.dismiss();
  }
};