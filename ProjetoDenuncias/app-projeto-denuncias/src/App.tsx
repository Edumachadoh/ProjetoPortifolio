import React from 'react';
import "./styleLogin.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
import Cadastro from './components/Cadastro.tsx';
import Denuncia from './components/FazerDenuncia.tsx';
import DenunciaListar from './components/ListarDenuncia.tsx';

function App() {
  return (
    <div id='app'>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/denuncia" element={<Denuncia/>}></Route>
        <Route path="/denuncia-listar" element={<DenunciaListar/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
