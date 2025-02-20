import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("user");

  return token ? <Navigate to="/" replace /> : children;
}
