import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data.result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
