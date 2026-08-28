// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BoxSpinner from 'sections/components/basic/spinner/BoxSpinner';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Mostra carregamento enquanto verifica o token inicial
  if (loading) {
    return <BoxSpinner />; 
  }

  // Se não estiver autenticado, redireciona para login
  if (!isAuthenticated) {
    return <Navigate to="auth/login" replace />;
  }

  // Se estiver autenticado, renderiza a rota filha
  return <Outlet />;
};

export default PrivateRoute;