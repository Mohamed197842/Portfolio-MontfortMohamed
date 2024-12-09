import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // Vérifier l'expiration du token
        if (decodedToken.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
          setIsAdmin(decodedToken.role === "admin");
        } else {
          localStorage.removeItem("authToken");
        }
      } catch (error) {
        console.error("Token invalide :", error);
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    const decodedToken = jwtDecode(token);
    setIsAuthenticated(true);
    setIsAdmin(decodedToken.role === "admin");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setIsAdmin(false); // Réinitialiser isAdmin au logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
