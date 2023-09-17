import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 600) => {
  const [debounced, setDebounced] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
};
