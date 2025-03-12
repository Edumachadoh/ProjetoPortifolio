import React from 'react';
import "./styleLogin.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
import Cadastro from './components/Cadastro.tsx';
import DenunciaFazer from './components/FazerDenuncia.tsx';
import DenunciaListar from './components/ListarDenuncia.tsx';
import DenunciaAnalisar from './components/AnalisarDenuncia.tsx';
import Contato from './components/Contato.tsx';
import EditarDenuncia from './components/EditarDenuncia.tsx';

function App() {
  return (
    <div id='app'>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/denuncia/:id" element={<DenunciaFazer/>}></Route>
        <Route path="/denuncia-listar" element={<DenunciaListar/>}></Route>
        <Route path="/denuncia-analisar" element={<DenunciaAnalisar/>}></Route>
        <Route path="/denuncia-editar" element={<EditarDenuncia/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
