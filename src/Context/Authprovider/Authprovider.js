import React, { createContext } from "react";
import useCart from "../../Hooks/useCart";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const allContexts = useFirebase();
  const { addToCart, remove } = useCart();

  const data = { allContexts, addToCart, remove };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Authprovider;
