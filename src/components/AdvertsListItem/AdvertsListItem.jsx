import PropTypes from "prop-types";
import { Placeholder } from "../Placeholder/Placeholder";
export const AdvertsListItem = ({
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
}) => {
  return (
      <li>
          {img ? (  <div>
        <img src={img} alt={model} />
      </div>) : (<Placeholder />)}
    
      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{address}</li>
        <li>country!!!!!</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{accessories[2]}</li>
      </ul>
    </li>
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
};
