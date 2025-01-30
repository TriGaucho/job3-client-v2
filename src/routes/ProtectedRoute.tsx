import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
  allowedPermissions: string[];
  isAuthenticated: boolean;
}

export const ProtectedRoute = ({
  children,
  requiredPermission,
  allowedPermissions,
  isAuthenticated
}: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredPermission && !allowedPermissions.includes(requiredPermission)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};