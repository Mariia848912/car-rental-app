
import PropTypes from 'prop-types';

import { AdvertsListItem } from "../AdvertsListItem/AdvertsListItem";
import { ListI } from './AdvertsList.styled';

export const AdvertsList = ({adverts, addToFavorite, deleteFavorite}) => {
  console.log(adverts);
  return (
      <>
          {adverts.length !== 0 ? (<ListI>
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
              addToFavorite={addToFavorite}
              deleteFavorite={deleteFavorite}
            />
          )
        )}{" "}
      </ListI>) : (<p>emptyyyyyyyyyyyyyy</p>)}
      
    </>
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array.isRequired,
   deleteFavorite: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
 
};
