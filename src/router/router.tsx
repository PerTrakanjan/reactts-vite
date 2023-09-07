import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../componets/Login";
import Register from "../componets/Register";
import ProtectedRoute from "../auth/ProtectedRoute";
import Home from "../Home";
import CallApi from "../api/CallApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/callApi",
    element: <CallApi />,
  },
]);
export default router;
