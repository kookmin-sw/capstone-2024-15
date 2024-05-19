import { useCallback, useEffect, useState } from 'react';

const useShowIllust = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const showIllust = useCallback(() => {
    let throttle = null;

    if (!throttle) {
      throttle = setTimeout(() => {
        throttle = null;
        if (window.innerWidth >= 1150) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 200);
    }
  }, [setIsVisible]);

  useEffect(() => {
    window.addEventListener('resize', showIllust);
    return () => window.removeEventListener('resize', showIllust);
  }, [showIllust]);

  return {
    isVisible,
  };
};

export default useShowIllust;
