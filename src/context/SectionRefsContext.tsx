"use client";
import React, { createContext, useContext } from "react";

const SectionRefsContext = createContext<IRefContext>({
  sectionRefs: [],
  registerRef: () => {},
});

export const SectionRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sectionRefs: React.RefObject<HTMLElement>[] = [];

  const registerRef = (ref: React.RefObject<HTMLElement>) => {
    sectionRefs.push(ref);
  };

  return (
    <SectionRefsContext.Provider value={{ sectionRefs, registerRef }}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useRefContext = () => useContext(SectionRefsContext);
