/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useTriggerToast = (error, data, reload = false, callBack) => {
  useEffect(() => {
    if (error) {
      console.error("Error:", error.message);
      toast.error(error.message);
    } else if (data) {
      toast.success(data.message);
      if (reload) {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      if (callBack) {
        callBack();
      }
    }
  }, [error, data]);
  return {};
};
