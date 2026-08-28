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
      description:
        "Arco-C - guia de estudo para aprender a utilizar o arco C modelo usado como exemplo Philips Endura!",
      link: "https://chk.eduzz.com/Z0B13POR9A",
      image: livrocc,
    },
    {
      id: 2,
      title: "Arco C - Chios Alpha",
      price: "19,90 R$",
      description:
        "Guia de estudos para aprender a utilizar as funções do arco C Chios Alpha!",
      link: "https://chk.eduzz.com/Q9N2PG3Z01",
      image: livrocc2,
    },
    {
      id: 3,
      title: "Protocolo Tep",
      price: "19,90 R$",
      description:
        "Guia de estudos para sair do automático e aprender como a realizar o protocolo tep!",
      link: "https://chk.eduzz.com/39VK8EKKWR",
      image: tep,
    },
    {
      id: 4,
      title: "Angio TC- coronárias -Básico",
      price: "24,59 R$",
      descripion:
        "Guia de estudos para aprender o básico sobre a tc de coronárias!",
      link: "https://chk.eduzz.com/40QRV5AQ9B",
      image: coronarias,
    },
    {
      id: 5,
      title: "Angio TC- coronárias - Avançado",
      price: "29,90 R$",
      description:
        "Guia de estudos para se aprofundar ainda mais na tc de coronárias!",
      link: "https://chk.eduzz.com/Q9N2O8PK01",
      image: coronarias2,
    },
    {
      id: 5,
      title: "Angio TC- coronárias - Básico e Avançado",
      price: "44,90 R$",
      description:
        "combo de coronárias do basico ao avançado!",
      link: "https://chk.eduzz.com/G92KYQD7WE",
      image: coronariascombo,
    },
  ];

  return (
    <section className="relative p-4 flex flex-col items-center justify-center">
      {/* Grid normal */}
      {!selectedProduct && (
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-15 items-center p-5 justify-center ">
          {products.map((product) => (
            <div
              key={product.id}
              className=" w-full md:w-70   relative flex flex-col gap-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-50 h-50 md:w-60 md:h-80 hover:shadow-2xl hover:shadow-amber-700 transition duration-600 bg-blue-500 rounded-2xl"
              />
              <button className="button1 rounded-2xl">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-sans"
                  onClick={(e) => e.stopPropagation()}
                >
                  {product.price}
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Overlay centralizado */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center text-white p-10 z-50">
          <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-60 h-80 rounded-2xl mb-6"
          />
          <p className="text-center text-[20px] max-w-md mb-6">
            {selectedProduct.description}
          </p>

          {/* Botão de compra dentro do overlay */}
          <button className="px-4 py-2 rounded-2xl button1 mb-6 ">
            <a
              href={selectedProduct.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans"
            >
              Comprar por {selectedProduct.price}
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </button>

          {/* Botão Voltar */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Voltar
          </button>
        </div>
      )}
    </section>
  );
}
