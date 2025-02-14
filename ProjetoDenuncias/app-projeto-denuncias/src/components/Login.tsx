import { useEffect ,useState } from 'react';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import fotoLogo from "../img/logoHome.jpg";

function Login(){
    
    return <div className="login-container">
    <button className="back-button"><Link to ="/" style={{ textDecoration: "none", color: 'black'}}>← Voltar</Link></button>
    <img src={fotoLogo} alt="Sistema de Denúncias Ambientais" className="login-logo" />
    <h2>Login de Usuário</h2>

    <div className="input-container">
      <label>Usuário</label>
      <input type="text" placeholder="Digite seu usuário" />
    </div>

    <div className="input-container">
      <label>Senha</label>
      <input type="password" placeholder="Digite sua senha" />
    </div>

    <a href="#" className="forgot-password">Esqueceu sua senha?</a>

    <button className="btn login">LOGIN</button>
    <button className="btn register"><Link to ="/cadastro" style={{ textDecoration: "none", color: 'black'}}>Cadastrar</Link></button>
  </div>
}

export default Login;