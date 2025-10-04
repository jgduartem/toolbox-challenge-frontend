import axios from "axios";
import { useState, useEffect } from "react";

const useFiles = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const { data, error } = await axios.get(url);
      if (error) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getFile = async (query) => {
    try {
      setLoading(true);
      const { data, error } = await axios.get(url, {
        params: {
          fileName: query,
        },
      });
        if (error) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url && !params) {
      getData();
    } else if (url && params && params?.trim() !== "") {
      getFile(params);
    }
  }, [url, params]);

  return { data, loading, error, refetch: getData, getFile };
};

export default useFiles;
