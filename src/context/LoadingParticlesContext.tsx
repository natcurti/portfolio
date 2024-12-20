"use client";
import { createContext, useContext, useState } from "react";

const LoadingParticlesContext = createContext<ILoadingParticlesContext>({
  isLoading: true,
  setIsLoading: () => {},
});

export const LoadingParticlesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <LoadingParticlesContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingParticlesContext.Provider>
  );
};

export const useLoadingParticlesContext = () =>
  useContext(LoadingParticlesContext);
