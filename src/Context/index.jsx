import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isPDOpen, setIsPDOpen] = useState(false);

  const openProductDetail = () => setIsPDOpen(true);
  const closeProductDetail = () => setIsPDOpen(false);

  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isPDOpen,
        product,
        setProduct,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
