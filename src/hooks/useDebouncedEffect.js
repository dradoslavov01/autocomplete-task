import { useEffect } from 'react';

export const useDebouncedEffect = (callback, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => callback(), delay);
    return () => clearTimeout(handler);
  }, [callback, delay]);
};