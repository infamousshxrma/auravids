import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user data
  const [authToken, setAuthToken] = useState(null); // State to store auth token
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem("authToken") || sessionStorage.getItem("authToken"));

  useEffect(() => {
    // Check for token in localStorage or sessionStorage on initial load
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (token) {
      setAuthToken(token);
      setIsUserLoggedIn(true);
    }

    setLoading(false);
  }, []);

  // Login function
  const login = (user, token) => {
    setUser(user);
    setAuthToken(token);
    setIsUserLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setAuthToken(null);
    setIsUserLoggedIn(false);
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    toast.success("Logout successful! See you next time.");
  };

  return (
    <AuthContext.Provider
      value={{ user, authToken, loading, logout, login, isUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
