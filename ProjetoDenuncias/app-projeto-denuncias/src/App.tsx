import React from 'react';
import "./styleLogin.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from './components/Login.tsx';
//import fotoLogo from "./img/logoHome.jpg";
import Home from './components/Home.tsx';
import Cadastro from './components/Cadastro.tsx';

function App() {
  return (
    <div id='app'>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
