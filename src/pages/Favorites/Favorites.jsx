import { AdvertsList } from "../../components/AdvertsList/AdvertsListT";
import { Empty } from "../../components/IsEmpty/Empty";
import { useFavorite } from "../../hooks/contectHooks";

const Favorites = () => {
  const { favorites } = useFavorite();
  return (
    <>
      {favorites.length > 0 ? (
        <AdvertsList items={favorites} />
      ) : (
        <Empty name="favorites list" />
      )}
    </>
  );
};
export default Favorites;
