/* COMPONENTS */

interface IButtonIcon {
  onClick: () => void;
  children: React.ReactNode;
  isMenuBtn?: boolean;
}

/* HOOKS */

interface IUseElementIsVisible<T extends HTMLElement> {
  ref: IGenericRef<T>;
  options?: IIntersectionObserverOptions;
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
