import { useEffect, useState } from "react";
import { fetchAdverts } from "../service/mockapi";
import { limit, totalItems } from "../utils/constant";
import { AdvertsList } from "../components/AdvertsList/AdvertsListT";
import { Filters } from "../components/Filters/Filters";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const [isLoading, setLoading] = useState(false);

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

  return (
    <>
   <Filters />
      {!error && (
        <>
          <AdvertsList items={adverts} />
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

