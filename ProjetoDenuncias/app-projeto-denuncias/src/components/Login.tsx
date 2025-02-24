import { useEffect ,useState } from 'react';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import fotoLogo from "../img/logoHome.jpg";
import { useNavigate } from 'react-router-dom';

function Login(){
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de uma chamada à API para buscar os usuários cadastrados
    fetch("http://localhost:5104/api/usuario/listar") // Altere para a URL correta da sua API
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);

    function verificarCadastro() {
      let usuarioEncontrado = false;

      // Verifica se o email e senha estão corretos
      usuarios.forEach((usuario) => {
        if (usuario.email === email && usuario.senha === senha) {
          usuarioEncontrado = true;
        }
      });
  
      if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        navigate("/Denuncia");

      } else {
        alert("Email ou senha incorretos!");
      }
    }
    
    return <div className="login-container">
    <button className="back-button"><Link to ="/" style={{ textDecoration: "none", color: 'black'}}>← Voltar</Link></button>
    <img src={fotoLogo} alt="Sistema de Denúncias Ambientais" className="login-logo" />
    
    <form onSubmit={verificarCadastro}>
    <h2>Login de Usuário</h2>

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

    <a href="#" className="forgot-password">Esqueceu sua senha?</a>

    <button className="btn login" >LOGIN</button>
    </form>
    <button className="btn register"><Link to ="/cadastro" style={{ textDecoration: "none", color: 'black'}}>Cadastrar</Link></button>
  </div>
}

export default Login;