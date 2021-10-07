import { toast } from "react-toastify";

export const useFlashMessage = () => {
  const showSuccessMessage = (message: string) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorMessage = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { showSuccessMessage, showErrorMessage };
};
