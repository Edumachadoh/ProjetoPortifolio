import { useEffect ,useState } from 'react';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import fotoLogo from "../img/logoHome.jpg";

function Cadastro(){
    
    return <div className="login-container">
    <button className="back-button"><Link to ="/Login" style={{ textDecoration: "none", color: 'black'}}>← Voltar</Link></button>
    <img src={fotoLogo} alt="Sistema de Denúncias Ambientais" className="cadastro-logo" />
    <h2>Cadastro de Usuário</h2>

    <div className="input-container">
      <label>Nome</label>
      <input type="text" placeholder="Digite seu Nome" />
    </div>

    <div className="input-container">
      <label>Cpf</label>
      <input type="password" placeholder="Digite seu Cpf" />
    </div>
    <div className="input-container">
      <label>Email</label>
      <input type="password" placeholder="Digite seu E-mail" />
    </div>
    <div className="input-container">
      <label>Senha</label>
      <input type="password" placeholder="Digite sua Senha" />
    </div>
    <div className="input-container">
      <label>Repita sua senha</label>
      <input type="password" placeholder="Digite sua Senha Novamente" />
    </div>

    <a href="#" className="forgot-password">Esqueceu sua senha?</a>

    <button className="btn register"><Link to ="/cadastro" style={{ textDecoration: "none", color: 'black'}}>Cadastrar</Link></button>
  </div>
}

export default Cadastro;