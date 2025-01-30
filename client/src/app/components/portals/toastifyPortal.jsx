import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";

function ToastifyPortal() {
  return createPortal(<ToastContainer />, document.getElementById("alerts"));
}

export default ToastifyPortal;
