import { useEffect, useRef, useState } from "react";
import { fetchAdverts } from "../service/mockapi";
import { KEY, limit, totalItems } from "../utils/constant";
import { AdvertsList } from "../components/AdvertsList/AdvertsListT";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const getAdverts = async () => {
      try {
        setLoading(true);
        let newAdverts = await fetchAdverts(limit, page);
        // if (newAdverts.length === 0) return;
        setAdverts((prev) => [...prev, ...newAdverts]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAdverts();
    // return setError(null);
  }, [page]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(KEY));
    if (items) {
      setFavorites(items);
    }
  }, []);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites]);
  const addToFavorite = (newFavorite) => {
    setFavorites((prev) => [...prev, newFavorite]);
  };
  const deleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Cataloggggg</h1>
      {!error && (
        <>
          <AdvertsList
            adverts={adverts}
            addToFavorite={addToFavorite}
            deleteFavorite={deleteFavorite}
          />
          {adverts.length < totalItems && (
            <button type="button" onClick={() => setPage((prev) => prev + 1)}>
              Load more
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Catalog;
