import PropTypes from "prop-types";

import { AdvertsListItem } from "../AdvertsListItem/AdvertsListItem";
import { ListI } from "./AdvertsList.styled";
import { Empty } from "../Common/Empty/Empty";


export const AdvertsList = ({ items }) => {
    return (
    <>
        {items.length !== 0 ? (
        <ListI>
          {items.map(
            ({
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
            }) => (
              <AdvertsListItem
                key={id}
                id={id}
                img={img}
                make={make}
                model={model}
                mileage={mileage}
                rentalCompany={rentalCompany}
                rentalConditions={rentalConditions}
                rentalPrice={rentalPrice}
                type={type}
                year={year}
                accessories={accessories}
                address={address}
                description={description}
                engineSize={engineSize}
                fuelConsumption={fuelConsumption}
                functionalities={functionalities}
              />
            )
          )}
        </ListI>
      ) : ( <Empty name='list'/>)}
    </>
  );
};

AdvertsList.propTypes = {
  items: PropTypes.array.isRequired,
};
