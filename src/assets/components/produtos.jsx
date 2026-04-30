import livrocc from "../img/livro-c.png";
import livrotc from "../img/livro-tc.png";
export function Produtos() {
  //todo componente começa com letra maiuscula
  return (
    <section id="Produtos" className=" my-10 text-center text-lg">
      <div>
        <h2
          className=" text-[32px] md:text-4xl  bg-linear-to-r from-blue-600 via-blue-400 to-purple-300    bg-clip-text text-transparent">Cursos e ebooks
        </h2>
        <span className="tracking-wider  text-[16px] md:text-3xl">Livros e conteúdos de Radiologia que você encontra aqui ! </span>
      </div>
      <div className="b0x-img bg-black/90 w-full  h-60 md:h-120  flex   items-center justify-center gap-10">
        <div className="box-card relative flex flex-col gap-2">
          <img src={livrocc} alt="" className=" w-40 h-40 md:w-70 md:h-80 border-2 border-amber-500 hover:shadow-2xl hover:shadow-amber-700 transition duration-600 bg-blue-500 rounded-2xl"/>
          <button className="bg-amber-500 rounded-2xl  hover:bg-white hover:transform hover:translate-y-1 transition duration-500"><a href="https://chk.eduzz.com/Z0B13POR9A" target="_blank" rel="noopener noreferrer">Adquirir</a></button>
        </div>
        <div className="box-card relative flex flex-col gap-2">
          <img src={livrotc} alt="" className=" w-40 h-40 md:w-70 md:h-80 border-2 border-amber-500 hover:shadow-2xl hover:shadow-amber-700 transition duration-600 bg-blue-500 rounded-2xl"/>
          <button className="bg-amber-500 rounded-2xl  hover:bg-white hover:transform hover:translate-y-1 transition duration-500"><a href="">Adquirir</a></button>
        </div>
       
        
        
      </div>
    </section>
  );
}
