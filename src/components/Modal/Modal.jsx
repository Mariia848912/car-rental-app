import PropTypes from "prop-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { changeRentalConditions } from "../../utils/changeRentalConditions";
import { changeMileage } from "../../utils/changeMileage";
import {
  Button,
  Img,
  ImgThumb,
  InfoList,
  ItemConditions,
  Model,
  Number,
  Text,
  Title,
  TitleSecondInfo,
  TitleThumb,
} from "./Modal.styled";

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
        <ImgThumb>
          <Img src={img} alt={model} />
        </ImgThumb>
      ) : (
        <Placeholder />
      )}
      <TitleThumb>
        <Title>
          {make} <Model>{model}</Model>, {year}
        </Title>
      </TitleThumb>

      <InfoList>
        <li>{cutCity(address)}</li>
        <li>{cutCountry(address)}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>Type: {changeType(type)}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </InfoList>

      <Text>{description}</Text>
      <div>
        <TitleSecondInfo>Accessories and functionalities:</TitleSecondInfo>
        <InfoList>
          {accessories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </InfoList>
        <InfoList>
          {functionalities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </InfoList>
      </div>
      <div>
        <TitleSecondInfo>Rental Conditions:</TitleSecondInfo>
        <InfoList>
          {changeRentalConditions(rentalConditions).map((item) => (
            <ItemConditions key={item}>{item}</ItemConditions>
          ))}
          <ItemConditions>
            Mileage: <Number>{changeMileage(mileage)}</Number>
          </ItemConditions>
          <ItemConditions>
            Price: <Number>{rentalPrice}$</Number>{" "}
          </ItemConditions>
        </InfoList>
        <Button href="tel:+380730000000">Rental car</Button>
      </div>
    </>
  );
};

Modal.propTypes = {
  item: PropTypes.object.isRequired,
};
