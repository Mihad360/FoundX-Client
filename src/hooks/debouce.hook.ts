import { useEffect, useState } from "react";

export const useDebouce = <T>(value: T, delay = 500) => {
  const [debounce, setDebounce] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounce;
};
