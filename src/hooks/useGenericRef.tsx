"use client";
import { useRef } from "react";

const useGenericRef = <T extends HTMLElement>(): IGenericRef<T> => {
  const ref = useRef<T | null>(null);
  return {
    current: ref.current,
  };
};

export default useGenericRef;
