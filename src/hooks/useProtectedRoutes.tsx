import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { menuLayout } from '../routes/menu';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';

export const useProtectedRoutes = (
  allowedPermissions: string[],
  isAuthenticated: boolean
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      {
        menuLayout.map((item) => (
          <Route
            key={item.route}
            path={item.route}
            element={
              <ProtectedRoute
                requiredPermission={item.permission}
                allowedPermissions={allowedPermissions}
                isAuthenticated={isAuthenticated}
              >
                {item.page}
              </ProtectedRoute>
            }
          />
        ))
      }
      <Route path="/unauthorized" element={<NotFound />} />
      < Route path="/login" element={<Login />} />
    </Routes>
  );
};