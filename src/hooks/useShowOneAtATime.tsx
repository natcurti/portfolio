"use client";
import { useEffect, useState } from "react";

const useShowOneAtATime = ({ array, showAnimation }: IUseShowOneAtATime) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (showAnimation) {
      const intervalId = setInterval(() => {
        if (current < array.length) {
          setCurrent((prev) => prev + 1);
        }
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [current, array.length, showAnimation]);

  return {
    current,
  };
};

export default useShowOneAtATime;
