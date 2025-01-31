import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ToastifyPortal from './app/components/portals/toastifyPortal.jsx';
import { AuthProvider } from './app/providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
    <ToastifyPortal />
  </AuthProvider>
);
