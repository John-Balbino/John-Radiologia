import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup
  .object({
    name: yup.string().required('Digite seu nome'),
    email: yup.string().required("Digite seu email").email(),
    assunto: yup.string().required("Digite o assunto"),
    
  })
  .required();

export function Contato() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  function onSubmit(data) {
        const mensagem = `Nome: ${data.name}%0AEmail: ${data.email}%0AAssunto: ${data.assunto}%0AMensagem: ${data.text}`;
        
        window.open(`https://wa.me/5511959768301?text=${mensagem}`, "_blank");
        window.alert("Mensagem enviada com sucesso !");     
  }

  return (
    <section
      className="flex flex-col items-center justify-center gap-5 p-5"
      id="Contato"
    >
      <div className="flex flex-col text-center ">
        <h2
          className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
                text-[28px] lg:text-4xl"
        >
          Entre em Contato
        </h2>
        <p>Mande sua sugestão,dúvidas ou ideias de parceria...</p>
      </div>

      <div className="container lg:flex flex flex-col   justify-center">
        <div className="flex gap-5 text-2xl md:text-4xl lg:text-5xl justify-center">
          <a
            href="https://www.instagram.com/jonathan_balbino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-pink-600 hover:-translate-y-1 transition duration-700 cursor-pointer"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp text-green-500 hover:-translate-y-1 transition duration-700 cursor-pointer"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-rodrigues-balbino-da-silva-042a21231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-blue-500 hover:-translate-y-1  transition duration-700 cursor-pointer"></i>
          </a>
          <i></i>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col md:w-100 w-80 mx-auto justify-center gap-2 p-2 "
        >
          <label htmlFor="" className="">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Nome"
              className="w-full border-2 border-blue-500 rounded-2xl p-2  bg-gray-800 "
            />
            {errors.name && (
              <span className="text-red-500 font-['Roboto'] text-[12px] uppercase ">
                {errors.name?.message}
              </span>
            )}
          </label>

          <label htmlFor="">
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Email"
              className="w-full border-2 border-blue-500 rounded-2xl p-2 bg-gray-800"
            />
            {errors.email && (
              <span className="text-red-500 font-['Roboto'] text-[12px] uppercase ">
                {errors.email?.message}
              </span>
            )}
          </label>

          <label htmlFor="">
            <input
              {...register("assunto", { required: true })}
              type="text"
              placeholder="Assunto "
              className="w-full border-2 border-blue-500 rounded-2xl p-2  bg-gray-800"
            />
            {errors.assunto && (
              <span className="text-red-500 font-['Roboto'] text-[12px] uppercase ">
                {errors.assunto?.message}
              </span>
            )}
          </label>
          <label htmlFor="">
            <textarea
              {...register("text", { required: true })}
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Mensagem"
              className="w-full border-2 border-blue-500 rounded-2xl p-2 bg-gray-800"
            ></textarea>
            {errors.text && (
              <span className="text-red-500 font-['Roboto'] text-[12px] uppercase ">
                {errors.text?.message}
              </span>
            )}
          </label>

          <button
            
            type="submit"
            className="bg-linear-to-t from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl hover:translate-y-1
                    transition duration-600 "
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
