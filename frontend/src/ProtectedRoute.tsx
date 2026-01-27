import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: ReactNode) {
  const role = localStorage.getItem("role");
  if (!role) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
