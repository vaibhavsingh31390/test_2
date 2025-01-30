import { useCallback } from "react";
import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = useCallback((message, type = "success") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
  }, []);
  return { showToast };
};
