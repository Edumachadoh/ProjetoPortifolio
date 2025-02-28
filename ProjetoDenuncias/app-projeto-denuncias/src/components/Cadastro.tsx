import { useEffect ,useState } from 'react';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import fotoLogo from "../img/logoHome.jpg";
import axios from 'axios';
import { Usuario } from '../interfaces/Usuario';

function Cadastro(){

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarUsuario(e: any) {
    e.preventDefault();

    const usuario: Usuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
      tipo: 0
    };

    var validacaoEmail = false;
    var validacaoNome = false;
    var validacaoCpf = false;
    var validacaoSenha = false;

    if (nome == '') {
      alert('O nome do usuário é obrigatório')
  } else {
    validacaoNome = true;
  }

  if (cpf == '') {
    alert('O cpf é obrigatório')
} else {
  validacaoCpf = true;
}

  if (email == '') {
    alert('O e-mail é obrigatório')
    validacaoEmail = false;
} else {
  validacaoEmail = true;
}

if (senha == '') {
  alert('A senha é obrigatória')
} else {
  validacaoSenha = true;
}

if (validacaoSenha && validacaoCpf && validacaoNome && validacaoEmail) {
  fetch("http://localhost:5104/api/usuario/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .then((usuario) => {
      console.log("Usuário cadastrado", usuario);
      alert("Usuario cadastrado com sucesso!");
    });

  }
}
    
  return (
    <div className="login-container">
      <button className="back-button">
        <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
          ← Voltar
        </Link>
      </button>
      <img src={fotoLogo} alt="Sistema de Denúncias Ambientais" className="cadastro-logo" />
  
      <form onSubmit={cadastrarUsuario}>
        <h2>Cadastro de Usuário</h2>
  
        <div className="input-container">
          <label>Nome</label>
          <input
            placeholder="Digite seu Nome"
            type="text"
            id="nome"
            name="nome"
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>
  
        <div className="input-container">
          <label>Cpf</label>
          <input
            placeholder="Digite seu Cpf"
            type="text"
            id="cpf"
            name="cpf"
            onChange={(e: any) => setCpf(e.target.value)}
          />
        </div>
  
        <div className="input-container">
          <label>Email</label>
          <input
            placeholder="Digite seu Email"
            type="text"
            id="email"
            name="email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
  
        <div className="input-container">
          <label>Senha</label>
          <input
            placeholder="Digite sua Senha"
            type="password"
            id="senha"
            name="senha"
            onChange={(e: any) => setSenha(e.target.value)}
          />
        </div>
  
        <div className="input-container">
          <label>Repita sua senha</label>
          <input type="password" placeholder="Digite sua Senha Novamente" />
        </div>
  
  
        <button style={{ textDecoration: "none", color: "black" }} type="submit" className="btn register">
           
            Cadastrar 
          
        </button>
      </form>
    </div>
  );
  }

export default Cadastro;