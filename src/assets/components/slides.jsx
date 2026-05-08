import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import slide1 from "../img/slide1.png";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function Slides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: "1",
      image: slide1,
      title: "John Balbino",
      description: " Olá meu nome é John, seja bem vindo(a)! ",
      link: "",
      buttonText: "Saiba Mais",
      style: { border: "10px solid rgb(0, 132, 255)" },
    },
    {
      id: "2",
      image: slide2,

      title: "Curso em video",
      description: " Em breve aulas em video sobre exames e procedimentos",
      link: "#",
      buttonText: "Saiba Mais",

      style: { border: "10px solid rgba(0, 64, 255, 0.34)" },
    },
    {
      id: "3",
      image: slide3,

      title: "Arco Cirurgico",
      description:
        "Manual do Arco cirurgico,um guia para você não travar no seu plantão!",
      link: "https://chk.eduzz.com/Z0B13POR9A",
      buttonText: "Saiba Mais",
      style: { border: "10px solid rgb(115, 0, 255)" },
    },
  ];

  return (
    <Swiper
      className=""
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      effect="coverflow"
      // ✅ essencial para o efeito 3D ficar visível
      centeredSlides={true}
      slidesPerView={1.4}
      // ✅ configuração do efeito
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 5000, //time for switch slide
        disableOnInteraction: false, //shutdown slide autoplay
      }}
      pagination={{ clickable: true }}
      speed={600}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id} id="effect">
          <div id="Home" className=" my-30 w-full h-100 md:h-auto flex gap-10 ">
            <img
              src={item.image}
              alt="Slider"
              className=" relative slide-item w-full h-auto md:w-200 lg:w-300 object-cover rounded-2xl   "
              style={{
                filter:
                  activeIndex === item.id - 1
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                transition: "filter 0.6s ease",
              }}
            />

            <div
              className="slide-content text-[8px] md:text-[14px]  lg:text-[18px] 
              absolute p-2.5 bottom-[20%] left-[30%] transform translate-x-[-50%]   text-white z-1 
            text-shadow-2xs flex flex-col  gap-2 md:gap-5  "
            >
              <h2 className=" text-[18px]  lg:text-3xl bg-linear-to-r from-amber-700 via-amber-500 to-amber-200 bg-clip-text text-transparent">
                {item.title}
              </h2>
              <p className="lg:w-70 md:w-40 w-25  p-2 rounded-[14px]  bg-white text-black  text-left">
                {item.description}
              </p>
              <a href={item.link} target="_blank" rel="" className="">
                <button
                  className="bg-amber-400 p-2 rounded-2xl ,
                   md:w-40 hover:bg-transparent hover:border-2 hover:border-amber-400
                   animate-pulse
                   transition duration-500
                   ease-in-out"
                >
                  {item.buttonText}
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
