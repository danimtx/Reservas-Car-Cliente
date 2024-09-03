import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirigir al login si no está autenticado
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el contenido protegido
  return children;
};

export default ProtectedRoute;
