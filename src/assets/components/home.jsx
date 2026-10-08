import { Link } from "react-router-dom";
import fotoperfil from "../img/fotoperfil2.png";

export function Home() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-black text-white overflow-hidden flex items-center justify-center font-sans">
      {/* Esferas de iluminação ambiental no fundo */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Conteúdo de Texto */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            Plataforma Educacional
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            Bem-vindos
          </h1>

          {/* ==============================================
              CARD DE TEXTO MELHORADO
             ============================================== */}
          <div className="relative group max-w-2xl w-full">
            {/* Linha de luz neon na borda superior do card */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-20"></div>
            
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-950/80 to-black/90 backdrop-blur-xl border border-slate-800/80 group-hover:border-cyan-500/30 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-4 text-left overflow-hidden">
              
              {/* Brilho interno suave no canto superior esquerdo */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

              <p className="relative z-10 text-slate-200 text-base md:text-lg leading-relaxed font-normal">
                Bem-vindos à nossa página de conteúdos em{" "}
                <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 underline-offset-4">
                  Radiologia
                </span>
                ! Aqui você encontra eBooks exclusivos desenvolvidos para apoiar seu aprendizado e atualização profissional.
              </p>
              
              {/* Separador elegante */}
              <div className="w-full h-[1px] bg-gradient-to-r from-slate-800/80 via-slate-700/40 to-transparent my-2"></div>

              <p className="relative z-10 text-slate-400 text-sm md:text-base leading-relaxed font-light">
                Em breve, disponibilizaremos <strong className="text-slate-200 font-medium">videoaulas detalhadas</strong> explicando o passo a passo dos principais exames e as tecnologias mais recentes da área.
              </p>
            </div>
          </div>

          {/* ==============================================
              BOTÃO CTA COM EFEITO GLOW / NEON
             ============================================== */}
          <div className="pt-2">
            <Link to="/Contato" className="group relative inline-block">
              {/* Camada de brilho expansivo traseiro (Glow Effect) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-300"></div>
              
              {/* Botão Principal */}
              <button className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold text-base tracking-wide rounded-xl border border-cyan-200/40 shadow-xl transition-all duration-300 active:scale-95">
                <span>Entre em Contato</span>
                <i className="fa-solid fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1.5"></i>
              </button>
            </Link>
          </div>

        </div>

        {/* Imagem de Perfil */}
        <div className="relative group flex items-center justify-center">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 group-hover:opacity-70 blur-xl transition duration-500" />
          <figure className="relative p-2 bg-black/60 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <img
              src={fotoperfil}
              alt="Foto de Perfil"
              className="w-60 h-72 sm:w-72 sm:h-88 md:w-80 md:h-[420px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </figure>
        </div>

      </div>
    </section>
  );
}