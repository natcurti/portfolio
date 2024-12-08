import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Sobre Mim</Link>
        </li>
        <li>
          <Image
            src="/assets/logo-portfolio.png"
            width={100}
            height={100}
            alt=""
          />
        </li>
        <li>
          <Link href="">Projetos</Link>
        </li>
        <li>
          <Link href="">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
