
import { AdvertsList } from "../components/AdvertsList/AdvertsListT";
import { useFavorite } from "../hooks/contectHooks";


const Favorites = () => {
    const {  favorites } = useFavorite();
  return (
    <>
      <h1>Favorites</h1>

      
        {favorites.length > 0 && (<AdvertsList
            items={favorites}
                     />)}
          
        
        
    </>
  );
};
export default Favorites;
