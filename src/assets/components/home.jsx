import fotoperfil from "../img/fotoperfil2.png";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <section
      className="bg-black w-full h-full my-15 text-center flex flex-col 
    items-center justify-center gap-10  "
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full ">
        <div className="text-content flex flex-col items-center gap-5 justify-center">
          <h2 className="w-full text-4xl md:text-6xl  p-5 uppercase">
            Bem Vindos
          </h2>
          <p className="p-5 w-[90%] text-[16px] md:text-2xl md:w-150 md:font-extralight border border-white">
            Bem-vindos à nossa página de conteúdos em Radiologia! Aqui você
            encontra eBooks exclusivos sobre temas importantes da nossa
            profissão. Em breve, também disponibilizaremos video aulas
            detalhadas, explicando passo a passo os principais exames e as
            tecnologias utilizadas na área. Nosso objetivo é oferecer materiais
            de qualidade para apoiar seu aprendizado e atualização profissional.
          </p>
          <Link to="/Contato">
            <button className="button1">Contato</button>
          </Link>
        </div>

        <figure className="flex items-center justify-center p-5 md:mt-10">
          <img
            src={fotoperfil}
            alt=""
            className="w-50 h-60 rounded-full md:rounded-none "
          />
        </figure>
      </div>
    </section>
  );
}
