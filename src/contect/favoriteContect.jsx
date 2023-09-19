import { createContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { KEY } from "../utils/constant";

export const FavoriteContext = createContext();


export const FavoriteProvider = ({ children }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const isFirstRender = useRef(true);

   useEffect(() => {
    const items = JSON.parse(localStorage.getItem(KEY));
    if (items) {
      setFavorites(items);
    }
  }, [setFavorites]);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (newFavorite) => {
    setFavorites((prev) => [...prev, newFavorite]);
  };
  const deleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleFavorite = (newFavorite) => {
    const checkFavorite = favorites.some(item => item.id === newFavorite.id);
    if (!checkFavorite) {
      setFavorites((prev) => [...prev, newFavorite]);
    } else {
      setFavorites((prev) => prev.filter((item) => item.id !== newFavorite.id));
    }
    

}
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorite,
        deleteFavorite,
        isFirstRender,
        toggleFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
