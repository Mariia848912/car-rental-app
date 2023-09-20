import { useEffect, useState } from "react";
import { fetchAdverts, gethAdvertsByQuery } from "../../service/mockapi";
import { limit, totalItems } from "../../utils/constant";
import { AdvertsList } from "../../components/AdvertsList/AdvertsListT";
import { Filters } from "../../components/Filters/Filters";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getAdverts = async () => {
      try {
        setLoading(true);
        let newAdverts; 
             
        if (query.length > 0) {
          newAdverts = await gethAdvertsByQuery(limit, page, query);
           setAdverts(newAdverts);
        } else {    newAdverts = await fetchAdverts(limit, page);
           // if (newAdverts.length === 0) return;
        setAdverts((prev) => [...prev, ...newAdverts]);}
   
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAdverts();
    // return setError(null);
  }, [page, query]);

  const getQuery = (query) => {
    setQuery(query);
    setPage(1);
  };
  return (
    <>
      <Filters getQuery={getQuery} />
      {!error && (
        <>
          <AdvertsList items={adverts} />
          {adverts.length < totalItems && adverts.length >= limit && (
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
