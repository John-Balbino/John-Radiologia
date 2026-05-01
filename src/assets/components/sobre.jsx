import fotoperfil from "../img/fotoperfil1.png";

export function Sobre() {
  return (
    <section id="Sobre" className=" my-20 text-center text-lg ">
      <div className="flex gap-10 items-center justify-center flex-col md:flex-row">
        <article className="flex-col">
          <h2 className="text-[28px] md:text-3xl bg-linear-to-r from-blue-600 via-blue-400 to-purple-300  bg-clip-text text-transparent">
            Seja bem-vindo(a) ao nosso site
          </h2>
          <p className="w-fit p-10 md:w-80 lg:w-100 mx-auto mt-5 text-left">
            Nossa página nasce com o propósito de compartilhar conhecimento,
            inspirar crescimento e criar conexões significativas. Acreditamos em
            valores como respeito, transparência e colaboração, que guiam cada
            conteúdo e interação aqui. Queremos que este espaço seja mais do que
            informativo: que seja um ambiente de aprendizado e
            inspiração. Você é parte essencial dessa jornada, e é com alegria
            que damos as boas-vindas a você!
          </p>
        </article>
        <figure>
          <img
            src={fotoperfil}
            alt="Imagem relacionada à empresa"
            className="w-80 h-110 rounded-lg "
          />
          
        </figure>
      </div>
    </section>
  );
}
