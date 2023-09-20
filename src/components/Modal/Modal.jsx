import PropTypes from "prop-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { changeRentalConditions } from "../../utils/changeRentalConditions";
import { changePrice } from "../../utils/changePrice";
import { changeMileage } from "../../utils/changeMileage";

export const Modal = ({ item }) => {
  const {
    id,
    img,
    make,
    model,
    mileage,
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
  } = item;
  return (
    <>
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
      </div>

      <ul>
        <li>{cutCity(address)}</li>
        <li>{cutCountry(address)}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>Type: {changeType(type)}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>

      <p>{description}</p>
      <div>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {accessories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul>
          {functionalities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Rental Conditions:</h3>
        <ul>
          {changeRentalConditions(rentalConditions).map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            Mileage: <span>{changeMileage(mileage)}</span>
          </li>
          <li>
            Price: <span>{changePrice(rentalPrice)}</span>{" "}
          </li>
        </ul>
        <a href="tel:+380730000000">Rental car</a>
      </div>
    </>
  );
};

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  };
