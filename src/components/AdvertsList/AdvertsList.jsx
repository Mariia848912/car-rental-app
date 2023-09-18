import PropTypes from 'prop-types';

import { AdvertsListItem } from "../AdvertsListItem/AdvertsListItem";

export const AdvertsList = ({adverts}) => {
    console.log('AdvertsList', adverts);
  return (
      <>
          {adverts.length !== 0 ? (<ul>
        {adverts.map(
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
        )}{" "}
      </ul>) : (<p>emptyyyyyyyyyyyyyy</p>)}
      
    </>
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array.isRequired,
 
};