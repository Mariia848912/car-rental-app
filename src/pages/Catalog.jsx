import {  useEffect, useState } from 'react';
import { fetchAdverts } from '../service/mockapi';


const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 2;
    const [isLoading, setLoading] = useState(false);

  // const getAdverts = () => {
  //   let newAdverts = fetchAdverts(2, page);
  //       setAdverts(prev => [prev, ...newAdverts]);

  // }
 
  useEffect(() => {
        
    const getAdverts = async () => {
      setLoading(true);
    let newAdverts = await fetchAdverts(limit, page);
        setAdverts(prev => [...prev, ...newAdverts]);

    }
    getAdverts();
    setLoading(false);
    // let newAdverts = await fetchAdverts(limit, page);
    // console.log(newAdverts);
    // setAdverts(prev => [prev, ...newAdverts]);
    // console.log(adverts);
  }, [page])
      console.log("adverts", adverts);

  return (
    <>
      <h1>Cataloggggg</h1>
      <button type='button' onClick={() => setPage(prev => prev + 1)}>Load more</button>
    </>
  );
};

export default Catalog;
