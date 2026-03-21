import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store/store";
import { Loading } from "@/components/Loading";

type TProtectedRouteProps = {
  roles?: string[];
  children: React.ReactNode;
};

export const ProtectedRoute = ({ roles, children }: TProtectedRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const isInitializing = useAppSelector((state) => state.auth.isInitializing);
  const isFetchingUser = useAppSelector((state) => state.auth.isFetchingUser);

  if (isInitializing || isFetchingUser) return <Loading />;

  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
