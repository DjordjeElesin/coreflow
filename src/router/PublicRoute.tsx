import { useAppSelector } from "@/store/store";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (token) return <Navigate to="/dashboard" replace />;

  return children;
};
