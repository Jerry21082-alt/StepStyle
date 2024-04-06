import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setStoreValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setItem = (newValue) => {
    setStoreValue(newValue);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setItem]
};
