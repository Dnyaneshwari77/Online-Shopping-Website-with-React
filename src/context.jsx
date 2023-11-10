import React, { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("smartphones");
  const [cart, setCart] = useState([]);
  const [singleProduct, setSingleProduct] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const fetchById = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(async (res) => await res.json())
      .then((data) => setSingleProduct(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const fetchByCategories = (url) => {
    fetchSearchProducts(url);
  };

  const fetchSearchProducts = (url) => {
    fetch(url)
      .then(async (res) => await res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCategories = (url) => {
    fetch(url)
      .then(async (res) => await res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSearchProducts(`https://dummyjson.com/products/search?q=${search}`);
  }, [search]);

  useEffect(() => {
    fetchSearchProducts("https://dummyjson.com/products");
    fetchCategories("https://dummyjson.com/products/categories");
  }, []);
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        products,
        setProducts,
        fetchSearchProducts,
        categories,
        fetchByCategories,
        category,
        setCategory,
        cart,
        addToCart,
        removeFromCart,
        fetchById,
        singleProduct,
        setSingleProduct,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
