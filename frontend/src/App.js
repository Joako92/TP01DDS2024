import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Comercios from './components/Comercios'
import Productos from './components/Productos'
import Home from './components/Home'
import Error404 from './components/Error404';
import Pedido from './components/Pedido';
import React from 'react';

function App() {

  return (
    <Router>
      <div className='pag-princ'>
        <header>
        {/* Imagen de encabezado de la pagina */}
          <div>
          </div>
          <div>
            <h2>AyPedidos!</h2>
          </div>
          <div></div>
          
        </header>
        {/* Barra de menu */}  
        <nav>
          <ul className='navbar-nav'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Comercios">Comercios</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Pedido">Mi Pedido</Link></li>
          </ul>
        </nav>
      
      {/* Rutas */}
        <Routes>
          <Route path="/comercios" element={<Comercios/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
          <Route path="/Pedido" element={<Pedido />}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
