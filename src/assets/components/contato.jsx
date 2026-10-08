export function Contato() {
  const contactMethods = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: "Atendimento direto e tira-dúvidas",
      info: "+55 (11) 95976-8301",
      link: "https://wa.me/5511959768301",
      icon: "fa-brands fa-whatsapp",
      btnText: "Iniciar Conversa",
      badge: "Online",
      hoverStyle:
        "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
      badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dotStyle: "bg-emerald-400 animate-pulse",
      btnStyle: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      subtitle: "Rede profissional e publicações",
      info: "Jonathan Balbino da Silva",
      link: "https://www.linkedin.com/in/jonathan-balbino-da-silva/",
      icon: "fa-brands fa-linkedin-in",
      btnText: "Ver Perfil",
      badge: "Profissional",
      hoverStyle:
        "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
      badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      dotStyle: "bg-cyan-400",
      btnStyle: "bg-cyan-400 hover:bg-cyan-300 text-slate-950",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-slate-950 text-white overflow-hidden min-h-[75vh] flex flex-col items-center justify-center font-sans">
      {/* Luzes de fundo de seção */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full space-y-10 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Canais Diretos
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            Entre em Contato Conosco
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
            Clique em uma das opções abaixo para falar diretamente conosco ou acompanhar nossos conteúdos e atualizações profissionais.
          </p>
        </div>

        {/* Grid de Cards de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 ${method.hoverStyle}`}
            >
              {/* Topo do Card (Ícone + Status) */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${method.icon} text-3xl text-white group-hover:text-cyan-400 transition-colors`}></i>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-wider uppercase ${method.badgeStyle}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${method.dotStyle}`}></span>
                  {method.badge}
                </span>
              </div>

              {/* Informações do Card */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {method.title}
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  {method.subtitle}
                </p>
                <p className="text-sm font-semibold text-slate-200 pt-1">
                  {method.info}
                </p>
              </div>

              {/* Botão de Ação Interno */}
              <div className="pt-2">
                <div className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${method.btnStyle}`}>
                  <span>{method.btnText}</span>
                  <i className="fa-solid fa-arrow-right text-[11px] transition-transform group-hover:translate-x-1"></i>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}