import { useCallback, useEffect, useState } from 'react';

const useMousePointer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showMousePointer = useCallback(() => {
    let throttle = null;

    if (!throttle) {
      throttle = setTimeout(() => {
        throttle = null;
        if (window.innerWidth >= 1185) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 200);
    }
  }, [setIsVisible]);

  useEffect(() => {
    window.addEventListener('resize', showMousePointer);
    return () => window.removeEventListener('resize', showMousePointer);
  }, [showMousePointer]);

  return {
    isVisible,
  };
};

export default useMousePointer;
