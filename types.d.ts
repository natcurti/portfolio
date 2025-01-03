/* COMPONENTS */

interface IButtonIcon {
  children: React.ReactNode;
  onClick?: () => void;
  isMenuBtn?: boolean;
}

interface IButton {
  children: React.ReactNode;
}

interface ICustomButton {
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  download?: string;
  disabled?: boolean;
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

interface IContactIcon {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}

interface ITitleSection {
  title: string;
}

interface ISection {
  id: string;
  children: React.ReactNode;
}

/* HOOKS */

interface IUseShowAnimation<T extends HTMLElement> {
  ref: IGenericRef<T>;
  options?: IIntersectionObserverOptions;
}

interface IUseShowOneAtATime {
  array: ISkills[] | IContactTypes[];
  showAnimation: boolean;
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

interface ISkills {
  icon: React.ReactNode;
  title: string;
}

interface IContactTypes {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}
