import { useState } from "react";

export function Achados() {
  const shopeeUrl =
    "https://collshp.com/johnr015152?share_channel_code=1&view=storefront";

  const [iframeKey, setIframeKey] = useState(0);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-2 sm:px-6 bg-slate-950 text-white overflow-hidden min-h-screen flex flex-col items-center font-sans">
      {/* Luzes ambientais de fundo */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Aumentado o limite de largura de max-w-6xl para max-w-[95%] e max-w-7xl no desktop */}
      <div className="w-full max-w-[95%] lg:max-w-7xl space-y-8 relative z-10 flex flex-col items-center">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            Indicações & Recomendados
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            Achadinhos da Shopee
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Uniformes, manuais de bolso, acessórios e equipamentos selecionados para o dia a dia na radiologia.
          </p>
        </div>

        {/* CONTAINER DA LOJA */}
        <div className="relative w-full rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] overflow-hidden group transition-all duration-500 hover:border-cyan-500/40">
          
          {/* Linha de luz neon na borda superior */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-20" />

          {/* BARRA SUPERIOR DA JANELA */}
          <div className="flex items-center justify-between px-3 md:px-5 py-3 bg-slate-950/80 border-b border-slate-800/80 gap-3">
            
            {/* Botões do sistema */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50 inline-block"></span>
            </div>

            {/* Barra de Endereço */}
            <div className="flex-1 max-w-lg hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400 justify-center">
              <i className="fa-solid fa-lock text-[10px] text-cyan-400"></i>
              <span className="truncate font-mono text-[11px] text-slate-300">
                shopee.com.br/johnr015152
              </span>
            </div>

            {/* Ações */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReload}
                title="Recarregar vitrine"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all text-xs"
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>

              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide transition-all duration-300 shadow-md active:scale-95"
              >
                <span className="hidden xs:inline">Abrir no App</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* IFRAME DA LOJA (Padding interno reduzido para p-1) */}
          <div className="relative w-full bg-slate-950 p-1">
            <iframe
              key={iframeKey}
              className="w-full h-[700px] sm:h-[800px] lg:h-[900px] rounded-xl border-0 bg-white"
              src={shopeeUrl}
              title="Vitrine de Achadinhos da Shopee - JB Radiologia"
              loading="lazy"
            ></iframe>
          </div>

          {/* Rodapé da Janela */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 text-[11px] text-slate-400 font-light">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-bag-shopping text-cyan-400 text-[10px]"></i>
              Loja Oficial do Canal
            </span>
            <span className="hidden sm:inline italic">
              Ambiente seguro mantido pela Shopee
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}