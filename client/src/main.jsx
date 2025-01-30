import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ToastifyPortal from "./app/components/portals/toastifyPortal.jsx";
import { AuthProvider } from "./app/store/authProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <ToastifyPortal />
    </AuthProvider>
  </StrictMode>
);
