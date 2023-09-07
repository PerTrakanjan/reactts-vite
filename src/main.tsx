import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserAuthContextProvider } from "./context/UserAuthContext.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
