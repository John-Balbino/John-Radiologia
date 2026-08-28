export function Contato() {
  return (
    <section>
      <h2 className="text-2xl p-2 uppercase">Entre em contato conosco</h2>
      <p className="p-2">clique no icone para entrar em contato:</p>
      <div className="flex items-center my-10 mx-2">
        <a href="https://wa.me/5511959768301" target="_blank"><i className="fa-brands fa-whatsapp text-6xl hover:scale-1.1 hover:text-green-700"></i></a>
        <a href="https://www.linkedin.com/in/jonathan-balbino-da-silva/" target="_blank"><i className="fa-brands fa-linkedin text-6xl hover:scale-1.1 hover:text-blue-700"></i></a>
      </div>
    </section>
  );
}
