import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./app/contexts/AuthContext.jsx";
import ToastifyPortal from "./app/components/portals/toastifyPortal.jsx";
import store from "./app/store/store.js";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastifyPortal />
    </AuthProvider>
  </Provider>
);
