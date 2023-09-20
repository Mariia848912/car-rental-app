import { useContext } from "react";
import { FavoriteContext } from "../contect/favoriteContect.jsx";

export const useFavorite = () => useContext(FavoriteContext);
