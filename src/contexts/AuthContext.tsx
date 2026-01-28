import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, AuthState } from "@/types";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
  deleteAccount: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
      });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulated API call - Replace with your Flask API
    // Example: const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Demo: accept any valid email/password
    if (email && password.length >= 6) {
      const user: User = {
        id: crypto.randomUUID(),
        email,
        name: email.split("@")[0],
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem("user", JSON.stringify(user));
      setAuthState({ user, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulated API call - Replace with your Flask API
    // Example: const response = await fetch('/api/register', { method: 'POST', body: JSON.stringify({ email, password, name }) });
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6 && name) {
      const user: User = {
        id: crypto.randomUUID(),
        email,
        name,
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem("user", JSON.stringify(user));
      setAuthState({ user, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuthState({ user: null, isAuthenticated: false });
  };

  const updateUser = (data: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...data };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setAuthState({ ...authState, user: updatedUser });
    }
  };

  const deleteAccount = () => {
    // Call your Flask API to delete the account
    // Example: await fetch('/api/users/' + authState.user?.id, { method: 'DELETE' });
    
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setAuthState({ user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        updateUser,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
