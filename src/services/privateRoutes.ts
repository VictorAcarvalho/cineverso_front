import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tokenIsAuthenticated } from './api';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenIsAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  if (!tokenIsAuthenticated()) {
    return null;
  }
  
  return children;
};

export default PrivateRoute;