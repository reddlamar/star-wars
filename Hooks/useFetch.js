import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  let ignore = false;

  useEffect(() => {
    if (!ignore) {
      fetch(url, {method: 'GET'}).then(response => response.json()).then(json => {
        setData(json);
      });
    }

    return () => ignore = true;
  }, []);

    return data;
}