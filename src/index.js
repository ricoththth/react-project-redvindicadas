import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Inicio from './pages/inicio/Inicio';
import Juegayaprende from './pages/juegayaprende/Juegayaprende';
import Kitfem from './pages/kitfem/Kitfem';
import Oportunidades from './pages/oportunidades/Oportunidades';
import Asociados from './pages/redes/asociados/Asociados';
import Lineas from './pages/redes/lineas/Lineas';
import Error404 from './pages/error404/Error404';
import Jovenes1 from './pages/juegayaprende/jovenes/jovenes1/Jovenes1';
import Jovenes2 from './pages/juegayaprende/jovenes/jovenes2/Jovenes2';
import Jovenes3 from './pages/juegayaprende/jovenes/jovenes3/Jovenes3';
import JovenesJuegos from './pages/juegayaprende/jovenes/jovenes_juegos/JovenesJuegos';
import Form from './pages/formulario/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Nombres temporales a las rutas */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/redv-pers/' element={<Home/>}></Route>
      <Route path='/redv-pers/inicio' element={<Inicio/>}></Route>
      <Route path='/redv-pers/juega-aprende' element={<Juegayaprende/>}></Route>
      <Route path='/redv-pers/kit-fem' element={<Kitfem/>}></Route>
      <Route path='/redv-pers/oportunidades' element={<Oportunidades/>}></Route>
      <Route path='/redv-pers/asociados' element={<Asociados/>}></Route>
      <Route path='/redv-pers/lineas' element={<Lineas/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/redv-pers/home' element={<Navigate replace to={'/'}/>}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
