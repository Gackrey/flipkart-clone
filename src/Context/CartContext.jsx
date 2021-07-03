import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "./reducerFun";
import JSONData from "../data.json";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, {
    Products: JSONData,
    sortBy: "",
    filterSize: [],
    filterBrand: [],
    filterSex: []
  });
  return (
    <CartContext.Provider
      value={{
        Products: state.Products,
        FilterProducts: state.FilterProducts,
        sortBy: state.sortBy,
        filterSize: state.filterSize,
        filterBrand: state.filterBrand,
        filterSex: state.filterSex,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
