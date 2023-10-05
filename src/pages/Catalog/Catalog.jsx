import { useEffect, useState } from "react";
import { fetchAdverts, gethAdvertsByQuery } from "../../service/mockapi";
import { BRAND, PRICE, limit, totalItems } from "../../utils/constant";
import { AdvertsList } from "../../components/AdvertsList/AdvertsListT";
import { Filters } from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import { ErrorText } from "../../components/ErrorText/ErrorText";
import { LoadMoreButton } from "../../components/Buttons/LoadMoreButton/LoadMoreButton";
import { CustomFilter } from "../../components/Filters/CustomFilter/CustomFilter";

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
        } else {
          newAdverts = await fetchAdverts(limit, page);
          setAdverts((prev) => [...prev, ...newAdverts]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAdverts();
    return setError(null);
  }, [page, query]);

  const getQuery = (query) => {
    setQuery(query);
    setPage(1);
  };
  const changePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
 <CustomFilter getQuery={getQuery}  />
      {/* <Filters getQuery={getQuery} /> */}

      {isLoading && <Loader />}
      {!error ? (
        <>
          <AdvertsList items={adverts} />
          {adverts.length < totalItems && adverts.length >= limit && (
            <LoadMoreButton changePage={changePage} />
          )}
        </>
      ) : (
        <ErrorText />
      )}
    </>
  );
};

export default Catalog;
