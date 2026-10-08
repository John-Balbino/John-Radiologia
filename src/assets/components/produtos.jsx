import { useState } from "react";
import livrocc from "../img/livro-c.png";
import livrocc2 from "../img/livrocc2.png";
import tep from "../img/livrotc.jpg";
import coronarias from "../img/coronarias1.png";
import coronarias2 from "../img/coronarias2.png";
import coronariascombo from "../img/coronariascombo.png";

export function Produtos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Arco-C - Philips Endura",
      price: "19,90 R$",
      tag: "Arco C",
      description:
        "Guia prático e ilustrado para aprender a utilizar o Arco-C modelo Philips Endura com foco no centro cirúrgico.",
      link: "https://chk.eduzz.com/Z0B13POR9A",
      image: livrocc,
    },
    {
      id: 2,
      title: "Arco C - Chios Alpha",
      price: "19,90 R$",
      tag: "Arco C",
      description:
        "Guia de estudos com o passo a passo completo para dominar as funções essenciais do equipamento Chios Alpha.",
      link: "https://chk.eduzz.com/Q9N2PG3Z01",
      image: livrocc2,
    },
    {
      id: 3,
      title: "Protocolo TEP",
      price: "19,90 R$",
      tag: "Tomografia",
      description:
        "Aprenda a sair do automático e realizar o protocolo de Tromboembolismo Pulmonar (TEP) na tomografia com segurança.",
      link: "https://chk.eduzz.com/39VK8EKKWR",
      image: tep,
    },
    {
      id: 4,
      title: "Angio TC Coronárias - Básico",
      price: "24,59 R$",
      tag: "Angiotomografia",
      description:
        "Guia prático para aprender os conceitos essenciais, anatomia e protocolos de aquisição da TC de coronárias.",
      link: "https://chk.eduzz.com/40QRV5AQ9B",
      image: coronarias,
    },
    {
      id: 5,
      title: "Angio TC Coronárias - Avançado",
      price: "29,90 R$",
      tag: "Angiotomografia",
      description:
        "Aprofunde seus conhecimentos técnicos com análise detalhada, artefatos, pós-processamento e casos avançados.",
      link: "https://chk.eduzz.com/Q9N2O8PK01",
      image: coronarias2,
    },
    {
      id: 6,
      title: "Angio TC Coronárias - Combo Completo",
      price: "44,90 R$",
      tag: "Oferta Combo",
      description:
        "Combo especial reunindo os e-books Básico e Avançado para uma formação completa do zero à prática.",
      link: "https://chk.eduzz.com/G92KYQD7WE",
      image: coronariascombo,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-slate-950 text-white overflow-hidden min-h-screen flex flex-col items-center font-sans">
      {/* Luzes ambientais de fundo */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full space-y-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-3">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Material Didático Exclusivo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            E-books de Radiologia
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light">
            Conteúdo direto ao ponto, focado na prática diária de exames, equipamentos e protocolos técnicos.
          </p>
        </div>

        {/* Grid de Cards de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] cursor-pointer"
            >
              {/* Moldura da Capa do E-book */}
              <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center mb-4 border border-slate-800/60">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge de Tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">
                  {product.tag}
                </span>

                {/* Badge de Preço */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-cyan-400 text-slate-950 text-xs font-bold tracking-wide shadow-md">
                  {product.price}
                </span>
              </div>

              {/* Título, Descrição e Botões */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1.5 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  {/* Botão Ver Detalhes */}
                  <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide border border-slate-700 transition-all flex items-center justify-center gap-2">
                    <span>Ver Detalhes</span>
                    <i className="fa-solid fa-eye text-cyan-400 text-xs"></i>
                  </button>

                  {/* Botão Compra Rápida */}
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Comprar ${product.title}`}
                    className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-cart-shopping text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay de Detalhes do Produto */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar Modal (X) */}
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Fechar modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Imagem no Modal */}
            <div className="w-48 h-64 flex-shrink-0 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 p-2 flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Conteúdo do Modal */}
            <div className="flex-1 space-y-4">
              <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase">
                {selectedProduct.tag}
              </span>

              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {selectedProduct.title}
              </h2>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                {selectedProduct.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-light">Valor</span>
                  <span className="text-xl font-extrabold text-cyan-400">{selectedProduct.price}</span>
                </div>

                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg transition-all duration-300 active:scale-95"
                >
                  <span>Garantir E-book</span>
                  <i className="fa-solid fa-cart-shopping transition-transform group-hover:scale-110"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}