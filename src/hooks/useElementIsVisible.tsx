"use client";
import { useEffect, useState } from "react";

const useElementIsVisible = <T extends HTMLElement>({
  ref,
  options,
}: IUseElementIsVisible<T>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const ElementToObserve = ref.current;
    const intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, options);

    if (ElementToObserve) {
      intersectionObserver.observe(ElementToObserve);
    }

    return () => {
      if (ElementToObserve) {
        intersectionObserver.unobserve(ElementToObserve);
      }
    };
  }, [ref, options]);

  return {
    isVisible,
  };
};

export default useElementIsVisible;
