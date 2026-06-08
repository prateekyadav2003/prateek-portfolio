import { useState, useEffect } from 'react';

export const useCounter = (targetValue, duration = 1200, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = parseInt(targetValue, 10);
    
    if (isNaN(end) || end <= 0) {
      setCount(targetValue);
      return;
    }

    const totalIntervals = Math.min(end, 50); // cap steps to avoid extreme fast intervals
    const increment = Math.ceil(end / totalIntervals);
    const stepTime = duration / totalIntervals;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, duration, trigger]);

  return count;
};
export default useCounter;
