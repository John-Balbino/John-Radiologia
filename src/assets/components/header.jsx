import { Link } from "react-router-dom";

import fundo from "../img/fundo1.jpg";
import logo from "../img/logo.png";

export function Navbar() {
  return (
    <header
      className="w-full text-white flex flex-col gap-10
        items-center justify-between p-5 relative"
    >
      <div className="flex flex-col text-center">
        <img
          src={logo}
          alt="logo"
          className="w-50 h-50 md:w-60 md:h-60 rounded-full glitch-tilt"
        />
      </div>

      {/* Menu Desktop */}
      <nav className="hidden md:flex w-full items-center justify-center">
        <ul className="flex text-[12px] md:text-2xl gap-8 p-5 border-b-2 border-t-2 border-white/30">
          <li className="nav hover:scale-120 transition duration-1200 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="nav hover:scale-120 transition duration-1200 ease-in-out">
            <Link to="/Produtos">E-books</Link>
          </li>
          <li className="nav hover:scale-120 transition duration-1200 ease-in-out">
            <Link to="/Contato">Contato</Link>
          </li>
          <li className="nav hover:scale-120 transition duration-1200 ease-in-out">
            <Link to="/Achadinhos">Achadinhos</Link>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile fixo */}
      <nav
        className="flex md:hidden fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm 
                items-center  z-50"
      >
        <ul className="flex gap-6 p-3 text-xl text-white justify-between w-full">
          <li>
            <Link to="/">
              <i className="fa-solid fa-house text-[24px]"></i>
            </Link>
          </li>
          <li>
            <Link to="/Produtos">
              <i className="fa-solid fa-wallet text-[24px]"></i>
            </Link>
          </li>
          <li>
            <Link to="/Contato">
              <i className="fa-solid fa-phone text-[24px]"></i>
            </Link>
          </li>
          <li>
            <Link to="/Achadinhos">
              <i className="fa-solid fa-bag-shopping text-[24px]"></i>
            </Link>
          </li>
        </ul>
      </nav>

      <figure className="absolute inset-0 -z-10 h-full">
        <img
          src={fundo}
          alt="foto-fundo"
          className="w-full h-full object-cover brightness-50 opacity-90"
        />
      </figure>
    </header>
  );
}
