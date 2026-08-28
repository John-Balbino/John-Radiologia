
import './assets/css/App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom' 


import { Navbar } from './assets/components/header'
import { Home } from './assets/components/home'
import { Area } from './assets/components/areas'
import { Produtos } from './assets/components/produtos'
import { Contato } from './assets/components/contato'
import { Achados } from './assets/components/achados'
import { Footer } from './assets/components/footer'


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Home/><Area/></>} />
          <Route path="/Produtos" element={<Produtos/>} />
          <Route path="/Contato" element={<Contato/>} />
          <Route path="/Achadinhos" element={<Achados/>} />
          

        </Routes>
      
        <Footer/>
      </div>
    </Router>
  )
}

export default App
