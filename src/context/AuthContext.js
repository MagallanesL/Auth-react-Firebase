import { createContext } from "react";

export const Context = createContext();

const user = {
  login: true,
};

export function AuthProvide({ children }) {
  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
}
