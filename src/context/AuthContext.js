import { createContext } from "react";

export const Context = createContext();

export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
}
