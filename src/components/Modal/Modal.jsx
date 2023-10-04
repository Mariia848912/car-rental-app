import PropTypes from "prop-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { cutCity } from "../../utils/cutCity";
import { cutCountry } from "../../utils/cutCountry";
import { changeType } from "../../utils/changeType";
import { changeRentalConditions } from "../../utils/changeRentalConditions";
import { changeMileage } from "../../utils/changeMileage";
import { stringToArray } from "../../utils/stringToArray";
import {
  Button,
  Img,
  ImgThumb,
  InfoList,
  InfoListItem,
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

      <InfoList style={{ marginBottom: 4 }}>
        <InfoListItem>{cutCity(address)}</InfoListItem>
        <InfoListItem>{cutCountry(address)}</InfoListItem>
        <InfoListItem>Id: {id}</InfoListItem>
        <InfoListItem>Year: {year}</InfoListItem>
        <InfoListItem>Type: {changeType(type)}</InfoListItem>
      </InfoList>
      <InfoList>
        <InfoListItem>Fuel Consumption: {fuelConsumption}</InfoListItem>
        <InfoListItem>Engine Size: {engineSize}</InfoListItem>
      </InfoList>

      <Text>{description}</Text>
      <div>
        <TitleSecondInfo>Accessories and functionalities:</TitleSecondInfo>
        <InfoList style={{ marginBottom: 4 }}>
          {accessories.map((item) => (
            <InfoListItem key={item}>{item}</InfoListItem>
          ))}
        </InfoList>
        <InfoList>
          {functionalities.map((item) => (
            <InfoListItem key={item}>{item}</InfoListItem>
          ))}
        </InfoList>
      </div>
      <div>
        <TitleSecondInfo>Rental Conditions:</TitleSecondInfo>
        <InfoList style={{ gap: 8 }}>
          {changeRentalConditions(rentalConditions).map((item) => {
            if (item.includes(":")) {
              const array = stringToArray(item, ":");

              return (
                <ItemConditions key={item}>
                  {array[0]}: <Number>{array[1]}</Number>
                </ItemConditions>
              );
            }
            return <ItemConditions key={item}>{item}</ItemConditions>;
          })}
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
