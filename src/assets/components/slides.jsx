import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import slide1 from "../img/slide1.png";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";

export function Slides() {
  const slides = [
    {
      id: "1",
      image: slide1,
      title: "John Balbino",
      description:
        " Olá meu nome é John, seja bem vindo(a)! ",
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
      description:'Manual do Arco cirurgico,um guia para você não travar no seu plantão!',
      link: "https://chk.eduzz.com/Z0B13POR9A",
      buttonText: "Saiba Mais",
      style: { border: "10px solid rgb(115, 0, 255)" },
    },
  ];

  return (
    <Swiper
      className=""
      modules={[EffectFade, Autoplay]}
      effect="fade"
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      autoplay={{
        delay: 5000, //time for switch slide
        disableOnInteraction: false, //shutdown slide autoplay
      }}
    >
      
      {slides.map((item) => (
        <SwiperSlide key={item.id} id="effect">
          <div id="Home"className="slide flex justify-center align-center relative mt-30 mx-auto w-100 h-50 md:w-150 md:h-80 lg:w-300 lg:h-150  ">
            <img
              src={item.image}
              alt="Slider"
              className="slide-item w-80 h-full md:w-200 lg:w-300 object-cover rounded-3xl   "
              style={item.style}
            />

            <div
              className="slide-content text-[8px]  lg:text-[18px] absolute p-2.5 bottom-1 left-12  text-white z-1 
            text-shadow-2xs flex flex-col  gap-2 md:gap-5 md:bottom-5 md:left-5  lg:left-10 lg:bottom-20 "
            >
              <h2 className=" text-[18px]  lg:text-3xl bg-linear-to-r from-amber-950 via-amber-500 to-amber-200 bg-clip-text text-transparent">
                {item.title}
              </h2>
              <p className="lg:w-70 md:w-40 w-25  p-2 rounded-3xl  bg-white text-black  text-left">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel=""
                className=""
              >
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
