import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../img/fundo-raios.jpg";
import img2 from "../img/tomo-fundo.jpg";
import img3 from "../img/cc-fundo.jpg";
import img4 from "../img/anatomia-fundo.jpg";

const areasData = [
  {
    id: "raios-x",
    title: "Raios - X",
    tag: "Radiologia Geral",
    img: img1,
    description:
      "Domine as técnicas de posicionamento radiográfico, física das radiações, fatores de exposição e radioproteção aplicados à prática diária.",
  },
  {
    id: "tomografia",
    title: "Tomografia",
    tag: "Tomografia Computadorizada",
    img: img2,
    description:
      "Aprofunde-se em protocolos de aquisição, uso de meios de contraste, cortes axiais e reconstruções tridimensionais (MPR / 3D).",
  },
  {
    id: "arco-c",
    title: "Arco C",
    tag: "Radiologia Cirúrgica",
    img: img3,
    description:
      "Guia completo de atuação no centro cirúrgico: manipulação do equipamento, escopia em tempo real e posicionamento cirúrgico.",
  },
  {
    id: "anatomia",
    title: "Anatomia",
    tag: "Anatomia Radiológica",
    img: img4,
    description:
      "Estudo detalhado das estruturas anatômicas e anatomia seccional voltado para interpretação técnica nos exames de imagem.",
  },
];

export function Area() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="relative w-full py-20 px-4 bg-slate-950 text-white overflow-hidden">
      {/* Luzes de fundo de seção */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-3">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Especialidades & Conteúdos
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            Áreas de Atuação
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light">
            Clique nos cards abaixo para explorar os temas e acessar os materiais exclusivos de cada modalidade.
          </p>
        </div>

        {/* Grid de Cards Interativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasData.map((area) => {
            const isOpen = activeCard === area.id;

            return (
              <div
                key={area.id}
                onClick={() => toggleCard(area.id)}
                className={`group relative h-96 md:h-[420px] rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                  isOpen
                    ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50"
                    : "border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl"
                }`}
              >
                {/* Imagem de Fundo (Aumentado o brilho de 50/40 para 85/60) */}
                <img
                  src={area.img}
                  alt={area.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    isOpen
                      ? "scale-110 brightness-60"
                      : "group-hover:scale-105 brightness-85"
                  }`}
                />

                {/* Sombra interna reduzida (de slate-950 puro para 90% no fundo e 30% no meio) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Conteúdo do Card */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left transition-all duration-300">
                  
                  {/* Badge da Área */}
                  <span className="inline-block self-start px-2.5 py-1 mb-2 rounded-md bg-slate-950/60 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                    {area.tag}
                  </span>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-1 flex items-center justify-between drop-shadow-md">
                    <span>{area.title}</span>
                    <i
                      className={`fa-solid fa-chevron-up text-xs text-cyan-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0 group-hover:-translate-y-1"
                      }`}
                    ></i>
                  </h3>

                  {/* Conteúdo Expandido */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-700/60"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden space-y-4">
                      <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-light drop-shadow">
                        {area.description}
                      </p>

                      {/* Botão Call To Action */}
                      <Link
                        to="/Produtos"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all duration-300 active:scale-95"
                      >
                        <span>Ver E-books desta área</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Dica visual quando o card está fechado */}
                  {!isOpen && (
                    <p className="text-[11px] text-slate-300 group-hover:text-cyan-400 transition-colors mt-2 font-light italic drop-shadow-sm">
                      Clique para ver mais informações...
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}