import { createPortal } from 'react-dom';
import { Toaster } from 'react-hot-toast';

function ToastifyPortal() {
  return createPortal(<Toaster />, document.getElementById('alerts'));
}

export default ToastifyPortal;
