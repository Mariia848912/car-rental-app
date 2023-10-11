import { useEffect, useState } from "react";
import { fetchAdverts } from "../../service/mockapi";
import { limit } from "../../utils/constant";
import { AdvertsList } from "../../components/AdvertsList/AdvertsListT";
import Loader from "../../components/Common/Loader/Loader";
import { ErrorText } from "../../components/Common/ErrorText/ErrorText";
import { LoadMoreButton } from "../../components/Buttons/LoadMoreButton/LoadMoreButton";
import { CustomFilter } from "../../components/Filters/CustomFilter/CustomFilter";
import { toast } from "react-toastify";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [advertsByQuery, setAdvertsByQuery] = useState([]);

  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const getAdverts = async () => {
      try {
        setLoading(true);
        let newAdverts;
        newAdverts = await fetchAdverts(limit, page);
        if (newAdverts.length === 0) {
          setHideButton(true);
          return toast.info(`Advertisements are out.`);
        }

        setAdverts((prev) => [...prev, ...newAdverts]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAdverts();
    return setError(null);
  }, [page]);

  useEffect(() => {
    const getAdvertsByQuery = () => {
      if (!query) return;
      const { brand, price, mileageFrom, mileageTo } = query;

      let newAdversByQuery = adverts;
      if (brand) {
        newAdversByQuery = newAdversByQuery.filter(
          (item) => item.make === brand
        );
      }
      if (price) {
        newAdversByQuery = newAdversByQuery.filter(
          (item) => item.rentalPrice === price
        );
      }
      if (mileageFrom) {
        const insideMileageFrom = Number.parseInt(mileageFrom.replace(",", ""));
        newAdversByQuery = newAdversByQuery.filter(
          (item) => item.mileage >= insideMileageFrom
        );
      }
      if (mileageTo) {
        const insideMileageTo = Number.parseInt(mileageTo.replace(",", ""));
        newAdversByQuery = newAdversByQuery.filter(
          (item) => item.mileage <= insideMileageTo
        );
      }

      setAdvertsByQuery(newAdversByQuery);
    };

    getAdvertsByQuery();
  }, [adverts, query]);
  const getQuery = (query) => {
    setQuery(query);
    setPage(1);
  };
  const resetQuery = () => {
    setQuery(null);
  };
  const changePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <CustomFilter getQuery={getQuery} resetQuery={resetQuery} />

      {isLoading && <Loader />}
      {!error ? (
        <>
          <AdvertsList items={query ? advertsByQuery : adverts} />
          {!query && adverts.length >= limit && !hideButton && (
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
