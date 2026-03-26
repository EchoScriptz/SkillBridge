import { useState, useCallback } from 'react';
import api from '../utils/api';

/**
 * Custom hook for API calls with loading/error states
 * Usage: const { data, loading, error, execute } = useApi();
 */
export function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (method, url, body = null) => {
    setLoading(true);
    setError(null);
    try {
      const config = body ? { method, url, data: body } : { method, url };
      const res = await api(config);
      setData(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Something went wrong';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback((url) => execute('GET', url), [execute]);
  const post = useCallback((url, body) => execute('POST', url, body), [execute]);
  const put = useCallback((url, body) => execute('PUT', url, body), [execute]);
  const del = useCallback((url) => execute('DELETE', url), [execute]);

  return { data, loading, error, execute, get, post, put, del, setData };
}
