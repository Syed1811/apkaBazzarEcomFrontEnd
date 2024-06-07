import { useState, useContext, createContext, useEffect } from "react";

const FavContext = createContext();
const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem("fav");
    if (existingCartItem) setFav(JSON.parse(existingCartItem));
  }, []);

  return (
    <FavContext.Provider value={[fav, setFav]}>{children}</FavContext.Provider>
  );
};

// custom hook
const useFav = () => useContext(FavContext);

export { useFav, FavProvider };
