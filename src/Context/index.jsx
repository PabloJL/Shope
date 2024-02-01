import { createContext } from "react";
import { useState, useEffect } from "react";
import { apiUrl } from "../../src/Api";

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

  // Shopping Cart Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  // Get products by title
  const [search, setSearch] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by category
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Ha ocurrido un problema: ${error}`);
      }
    };
    fetchData();
  }, []);

  const itemSearch = (items, search) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterBy = (searchType, items, search, category) => {
    if (searchType === "title") {
      return itemSearch(items, search);
    }

    if (searchType === "category") {
      return categorySearch(items, category);
    }
    if (searchType === "title&category") {
      return categorySearch(items, category).filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (search && !category)
      setFilteredItems(filterBy("title", items, search, category));
    if (category && !search)
      setFilteredItems(filterBy("category", items, search, category));
    if (category && search)
      setFilteredItems(filterBy("title&category", items, search, category));
    if (!category && !search) setFilteredItems(filterBy(null, items, search));
  }, [items, search, category]);

  const categorySearch = (items, category) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(category)
    );
  };

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
        order,
        setOrder,
        items,
        setItems,
        search,
        setSearch,
        filteredItems,
        setCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
