/* COMPONENTS */

interface IButtonIcon {
  onClick: () => void;
  children: React.ReactNode;
  isMenuBtn?: boolean;
}

interface ISkillCards {
  icon: React.ReactNode;
  title: string;
}

/* HOOKS */

interface IUseShowAnimation<T extends HTMLElement> {
  ref: IGenericRef<T>;
  options?: IIntersectionObserverOptions;
}

/* CONTEXT */

interface INavBarContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILoadingParticlesContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/* EXTRA */

interface IIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface IGenericRef<T extends HTMLElement> {
  current: T | null;
}
