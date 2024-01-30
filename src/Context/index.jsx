import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Product Detail
  const [isPDOpen, setIsPDOpen] = useState(false);
  const openProductDetail = () => setIsPDOpen(true);
  const closeProductDetail = () => setIsPDOpen(false);
  const [product, setProduct] = useState({});

  // Shopping Cart
  const [cart, setCart] = useState([]);
  const [isCOOpen, setIsCOOpen] = useState(false);
  const openCheckOut = () => setIsCOOpen(true);
  const closeCheckOut = () => setIsCOOpen(false);

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
        isCOOpen,
        openCheckOut,
        closeCheckOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
