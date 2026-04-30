
import { Footer } from './assets/components/footer'
import { Navbar } from './assets/components/header'
import './assets/css/App.css'
import { Slides } from './assets/components/slides'
import { Produtos } from './assets/components/produtos'
import { Sobre } from './assets/components/sobre'
import { Contato } from './assets/components/contato'

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Slides id="Home"/>
      <Sobre/>
      <Produtos id="Produtos"/>
      <Contato id="Contato"/>
      <Footer/> 

    </div>
  )
}

export default App
