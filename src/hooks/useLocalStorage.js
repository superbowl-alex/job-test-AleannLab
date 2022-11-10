import { useState, useEffect } from 'react';

export function useLocalStorage(type, id, defaultValue) {
  const key = `${type}-${id}`;
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
