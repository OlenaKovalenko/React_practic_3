import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchByQuery = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('q');

  useEffect(() => {
    if (!region) {
      return;
    }
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [region]);
  const onHandleSubmit = value => {
    setSearchParams({ q: value });
  };

  return { isLoading, error, countries, onHandleSubmit };
};
