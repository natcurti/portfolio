/* COMPONENTS */

interface IButtonIcon {
  onClick: () => void;
  children: React.ReactNode;
  isMenuBtn?: boolean;
}

interface IButton {
  children: React.ReactNode;
}

interface ISkillCards {
  icon: React.ReactNode;
  title: string;
}

interface IProjectCard {
  title: string;
  text: string;
  imgSrc: string;
  linkApp: string;
  linkGit: string;
  position: string;
}

interface INavBar {
  headerRef: React.RefObject<HTMLHeadingElement | null>;
}

interface IInput {
  name: string;
  id: string;
  isTextArea?: boolean;
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

interface IRefContext {
  sectionRefs: React.RefObject<HTMLElement>[];
  registerRef: (ref: React.RefObject<HTMLElement>) => void;
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
