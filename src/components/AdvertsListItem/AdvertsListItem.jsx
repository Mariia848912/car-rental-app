import PropTypes from "prop-types";

import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { Item } from "./AdvertsListItem.styled";
import { ActiveHeart, Heart } from "../../utils/icons";
export const AdvertsListItem = ({
  deleteFavorite,
  addToFavorite,
  id,
  img,
  make,
  model,
  mileage,
  rentalCompany,
  rentalConditions,
  rentalPrice,
  type,
  year,
  accessories,
  address,
  description,
  engineSize,
  fuelConsumption,
  functionalities,
}) => {

  return (
    <Item>
      {img ? (
        <div>
          <img src={img} alt={model} />
        </div>
      ) : (
        <Placeholder />
      )}

      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{cutCity(address)}</li>
        <li>{cutCountry(address)}</li>
        <li>{rentalCompany}</li>
        <li>{changeType(type)}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{accessories[2]}</li>
      </ul>
        <button type="button" onClick={()=> deleteFavorite(id)} >
        <ActiveHeart /> 
      </button>
      <button type="button" onClick={()=>addToFavorite({ id,
  img,
  make,
  model,
  mileage,
  rentalCompany,
  rentalConditions,
  rentalPrice,
  type,
  year,
  accessories,
  address,
  description,
  engineSize,
  fuelConsumption,
  functionalities,})}>
      <Heart />
      </button>
    </Item>
  );
};

AdvertsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  accessories: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  rentalConditions: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  functionalities: PropTypes.array.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
};

/*

id,
  img,
  make,
  model,
  rentalCompany,
  rentalPrice,
  type,
  year,
  accessories,
  address,
*/

//    useEffect(() => {
//        const savefavorites = localStorage.getItem('favourites');
//        console.log(favorites);
//     if (favorites) {
//       setFavorite(JSON.parse(savefavorites));
//     }
//   }, [favorites]);

//      const newfavorite = favorites.filter((itemId) => itemId !== id)
//   setFavorites(newfavorite);
//   localStorage.setItem("favourites", JSON.stringify(newfavorite))

/*
import PropTypes from "prop-types";
import { useEffect, useState, useRef  } from "react";

import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { Item } from "./AdvertsListItem.styled";
import { ActiveHeart, Heart } from "../../utils/icons";
import { KEY } from "../../utils/constant";
export const AdvertsListItem = ({
  id,
  img,
  make,
  model,
  mileage,
  rentalCompany,
  rentalConditions,
  rentalPrice,
  type,
  year,
  accessories,
  address,
  description,
  engineSize,
  fuelConsumption,
  functionalities,
}) => {
    //  
    // console.log(KEY);
  // const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem(KEY)) ?? []);
    const [favorites, setFavorites] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
   if (isFirstRender.current) {
        isFirstRender.current = false;
        // console.log('return use effect');
        //  console.log('isFirstRender', isFirstRender);
      return;
    }
    const data = localStorage.getItem(KEY);
// console.log('data',data);
    if (typeof data === 'string') {
        setFavorites(JSON.parse(data));
    }
  }, []);
    // console.log(favorites);
   
 
  useEffect(() => {
  
        // console.log('isFirstRender', isFirstRender);
      localStorage.setItem(KEY, JSON.stringify(favorites));
     
  }, [favorites]);

  const toggleFavorited = () => {
    const isFavourited = favorites.some((itemId) => itemId === id);

    console.log("isFavourited", isFavourited);
    if (!isFavourited) {
      const newfavorite = {
        id,
        img,
        make,
        model,
        mileage,
        rentalCompany,
        rentalConditions,
        rentalPrice,
        type,
        year,
        accessories,
        address,
        description,
        engineSize,
        fuelConsumption,
        functionalities,
      };
      console.log("newfavorite", newfavorite);
      setFavorites((prev) => [...prev, newfavorite]);
      console.log(favorites);
    } else {
      console.log("deleye");
      setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
    }
  };

  return (
    <Item>
      {img ? (
        <div>
          <img src={img} alt={model} />
        </div>
      ) : (
        <Placeholder />
      )}

      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{cutCity(address)}</li>
        <li>{cutCountry(address)}</li>
        <li>{rentalCompany}</li>
        <li>{changeType(type)}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{accessories[2]}</li>
      </ul>
      <button type="button" onClick={toggleFavorited}>
        <ActiveHeart /> <Heart />
      </button>
    </Item>
  );
};

AdvertsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  accessories: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  rentalConditions: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  functionalities: PropTypes.array.isRequired,
};

/*

id,
  img,
  make,
  model,
  rentalCompany,
  rentalPrice,
  type,
  year,
  accessories,
  address,
*/

//    useEffect(() => {
//        const savefavorites = localStorage.getItem('favourites');
//        console.log(favorites);
//     if (favorites) {
//       setFavorite(JSON.parse(savefavorites));
//     }
//   }, [favorites]);

//      const newfavorite = favorites.filter((itemId) => itemId !== id)
//   setFavorites(newfavorite);
//   localStorage.setItem("favourites", JSON.stringify(newfavorite))

