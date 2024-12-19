"use client";
import { useEffect, useState } from "react";

const useElementIsVisible = <T extends HTMLElement>({
  ref,
  options,
}: IUseElementIsVisible<T>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

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
  }, [ref, options]);

  return {
    isVisible,
  };
};

export default useElementIsVisible;
