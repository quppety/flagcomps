import { useState } from 'react';

export const useCounterControl = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return {
    handleCounter,
    counter,
  };
};
