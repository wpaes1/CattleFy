import { useEffect } from 'react';

export function useDebounceEffect(fn, waitTime, deps = []) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fn();
    }, waitTime);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, waitTime, ...deps]);
}
