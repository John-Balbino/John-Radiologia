export function Navbar(){
    return(
        <header className=" fixed w-full text-white flex flex-col md:flex-row 
        items-center justify-between z-50 p-5 bg-black/50 backdrop-blur-sm ">  
            <div className="flex flex-col text-center">
                <img src="" alt="" /> 
                <h1 className="text-2xl md:text-4xl text-black">John Balbino</h1>
                <span className="font-extralight font-[Roboto] uppercase text-[12px]">Estudos Radiologicos</span>
            </div>
            <nav>
                <ul className="flex gap-2">
                    <li className= 'transition duration-300 hover:text-blue-500 px-5  text-center  bg-blue-500 text-lg rounded-sm p hover:bg-white hover:border-2 hover:boder-blue-400'><a href="#Home">Home</a></li>
                    <li className= 'transition duration-300 hover:text-blue-500 px-5  text-center  bg-blue-500 text-lg rounded-sm p hover:bg-white hover:border-2 hover:boder-blue-400'><a href="#Produtos">Produtos</a></li>
                    <li className= 'transition duration-300 hover:text-blue-500 px-5  text-center  bg-blue-500 text-lg rounded-sm p hover:bg-white hover:border-2 hover:boder-blue-400'><a href="#Contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}