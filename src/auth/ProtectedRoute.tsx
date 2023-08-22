import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { user }: any = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;

  return <div>ProtectedRoute</div>;
}
