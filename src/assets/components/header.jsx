import { NavLink } from "react-router-dom";

import fundo from "../img/fundo1.jpg";
import logo from "../img/logo.png";

// Centralização das rotas para manter o código limpo (DRY)
const navItems = [
  { label: "Home", path: "/", icon: "fa-solid fa-house" },
  { label: "E-books", path: "/Produtos", icon: "fa-solid fa-book-open" },
  { label: "Contato", path: "/Contato", icon: "fa-solid fa-phone" },
  { label: "Achadinhos", path: "/Achadinhos", icon: "fa-solid fa-bag-shopping" },
];

export function Navbar() {
  return (
    <header className="relative w-full flex flex-col items-center justify-between pt-8 pb-6 text-white overflow-hidden">
      {/* Background com gradiente e transição suave */}
      <div className="absolute inset-0 -z-10">
        <img
          src={fundo}
          alt="foto-fundo"
          className="w-full h-full object-cover brightness-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      </div>

      {/* Logo com efeito sutil de brilho no hover */}
      <div className="group relative flex flex-col items-center mb-6">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-60 blur-md transition duration-500" />
        <img
          src={logo}
          alt="Logo JB & Radiologia"
          className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Menu Desktop (Glassmorphism Pura) */}
      <nav className="hidden md:flex items-center justify-center w-full max-w-3xl px-4">
        <ul className="flex items-center gap-8 px-8 py-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:text-cyan-400 py-1 ${
                    isActive
                      ? "text-cyan-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full"
                      : "text-gray-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Mobile Flutuante (Estilo App Dock) */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
        <ul className="flex items-center justify-around py-2.5 px-3 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 scale-105 bg-white/5"
                      : "text-gray-400 hover:text-gray-200"
                  }`
                }
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}