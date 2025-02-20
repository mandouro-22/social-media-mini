import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const accessToken = localStorage.getItem("user");
  const user = accessToken ? JSON.parse(accessToken) : null;

  return user ? children : <Navigate to="/login" replace />;
}
