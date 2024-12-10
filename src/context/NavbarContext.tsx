"use client";
import { createContext, useContext, useState } from "react";

interface INavBarContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<INavBarContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavBarContext = () => useContext(NavbarContext);
