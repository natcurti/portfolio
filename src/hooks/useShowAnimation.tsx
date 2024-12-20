"use client";
import { useCallback, useEffect, useState } from "react";

const useShowAnimation = <T extends HTMLElement>({
  ref,
  options,
}: IUseShowAnimation<T>) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const callbackIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShowAnimation(true);
      } else {
        return;
      }
    },
    []
  );

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      callbackIntersection,
      options
    );

    if (ref.current) {
      intersectionObserver.observe(ref.current);
    }

    const element = ref.current;

    return () => {
      if (element) {
        intersectionObserver.unobserve(element);
      }
    };
  }, [ref, options, callbackIntersection]);

  return {
    showAnimation,
  };
};

export default useShowAnimation;
