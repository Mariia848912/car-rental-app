import PropTypes from "prop-types";

import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { Item } from "./AdvertsListItem.styled";
import { ActiveHeart, Heart } from "../../utils/icons";
import { useFavorite } from "../../hooks/contectHooks";
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
const {favorites, toggleFavorite} = useFavorite()
const checkFavorite = favorites.some(item => item.id === id)
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
     
       <button type="button" onClick={()=>toggleFavorite({ id,
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
        {checkFavorite ? <ActiveHeart /> : <Heart />  }
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
