import img1 from "../img/fundo-raios.jpg";
import img2 from "../img/tomo-fundo.jpg";
import img3 from "../img/cc-fundo.jpg";
import img4 from "../img/anatomia-fundo.jpg";

export function Area() {
  return (
    <section className="relative grid grid-cols-2 w-full">
      {/* overlay por cima da section */}
      <div className="absolute inset-0 bg-cyan-500/20 pointer-events-none"></div>

      <div>
        <figure className="relative">
          <img src={img1} alt="" className="w-full h-auto opacity-40" />
          <figcaption className="absolute inset-0 flex items-center justify-center">
            <span className="text-white md:text-2xl  font-bold border-t-2 border-b-2 border-amber-600 p-4 uppercase">
              Raios - X
            </span>
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="relative">
          <img src={img2} alt="" className="w-full h-auto opacity-40" />
          <figcaption className="absolute inset-0 flex items-center justify-center">
            <span className="text-white  md:text-2xl font-bold border-t-2 border-b-2 border-amber-600 p-4 uppercase">
              Tomografia 
            </span>
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="relative">
          <img src={img3} alt="" className="w-full h-auto opacity-40" />
          <figcaption className="absolute inset-0 flex items-center justify-center">
            <span className="text-white md:text-2xl font-bold border-t-2 border-b-2 border-amber-600 p-4 uppercase">
              Arco C
            </span>
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="relative">
          <img src={img4} alt="" className="w-full h-auto opacity-40" />
          <figcaption className="absolute inset-0 flex items-center justify-center">
            <span className="text-white  md:text-2xl font-bold border-t-2 border-b-2 border-amber-600 p-4 uppercase">
              Anatomia
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
