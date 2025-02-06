import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { menuLayout } from '../routes/menu';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';
import { TMenuItem } from '../types/TMenu.type';
import { GENERAL_PATH } from '../Utils/constants';

export const useProtectedRoutes = (
  isAuthenticated: boolean
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`${GENERAL_PATH}/login`);
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      {
        menuLayout.map((item: TMenuItem) => (
          <Route
            key={item.route}
            path={item.route}
            element={
              item.page
            }
          />
        ))
      }
      <Route path="/unauthorized" element={<NotFound />} />
      < Route path="/login" element={<Login />} />
    </Routes>
  );
};