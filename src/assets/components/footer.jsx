import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
      {/* Linha de luz neon na borda superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Glow suave no fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Branding & Sobre */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo JB & Radiologia"
                className="w-10 h-10 rounded-full border border-cyan-500/30 object-cover shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                JB & <span className="text-cyan-400">Radiologia</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-light">
              Plataforma dedicada ao ensino e atualização em radiologia médica. Conteúdos práticos em Raios-X, Tomografia, Arco C e Anatomia para impulsionar sua carreira.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[9px] text-cyan-400"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Produtos" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[9px] text-cyan-400"></i>
                  E-books
                </Link>
              </li>
              <li>
                <Link to="/Contato" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[9px] text-cyan-400"></i>
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/Achadinhos" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[9px] text-cyan-400"></i>
                  Achadinhos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais & Contato */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Conecte-se
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Fale conosco ou acesse nossas redes sociais:
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-xl transition-transform group-hover:scale-110"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-xl transition-transform group-hover:scale-110"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="w-full h-[1px] bg-slate-800/80 mb-6" />

        {/* Rodapé Inferior (Copyright) */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-light gap-4 text-center sm:text-left">
          <p>© {currentYear} JB & Radiologia. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <span className="text-cyan-400 font-medium tracking-wide">
              JOHN BALBINO
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}