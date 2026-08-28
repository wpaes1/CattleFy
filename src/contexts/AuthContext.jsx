// AuthContext.js
import React, { createContext, useState, useContext } from 'react';


import { fetcherPost, fetcher } from '../utils/axios';
import useLocalStorage from 'hooks/useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('api-authorization')); // Inicialmente, pode ser false ou baseado em um token existente
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useLocalStorage('api-authorization', {access_token: '', token_type:''});

  // Função simulada de login
  const login = async (email, password) => {   
    const response = await fetcherPost(['login', {
        email: email,
        password: password        
    }]);
    setAccessToken({access_token: response.access_token, token_type: response.token_type});
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = async () => {
    // Limpar token, ex: localStorage.removeItem('token');
    const response = await fetcherPost(['logout', {}]);
    localStorage.removeItem('api-authorization');
    setIsAuthenticated(false);
  };

  // Verificação inicial ao carregar a app
  React.useEffect(() => {
    const token = localStorage.getItem('api-authorization');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);