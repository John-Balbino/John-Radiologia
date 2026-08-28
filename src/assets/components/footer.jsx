export function Footer() {
  //todo componente começa com letra maiuscula
  return (
    <footer className=" uppercase w-full h-15 text-center p-5">
      <span className="text-[12px] md:text-[18px] ">
        Site criado por -
        <a
          className=" pointer hover:underline animate-pulse "
          href="https://john-balbino.github.io/Portif-lio-3.0-react/"
        >
          John Balbino
        </a>
        - &copy; Direitos Reservados- 2026.
      </span>
    </footer>
  );
}
