import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';
import axios from 'axios';

function EditarDenuncia(){
  
    const { id } = useParams();
    const [denuncia, setDenuncias] = useState<Denuncia[]>([]);
    const [status, setStatus] = useState(0);

    
    useEffect(() => {
        if (id) {
      fetch("http://localhost:5104/api/denuncia/listar") 
          .then((resposta) => resposta.json())
          .then((dados) => {
              setDenuncias(dados);
          });
        }
  }, []);
  

  function atualizarStatus(id: number, novoStatus: number) {
    axios
        .put(`http://localhost:5104/api/denuncia/alterar/${id}`, { status: novoStatus })
        .then((resposta) => {
            console.log(`✅ Status da denúncia ${id} atualizado para: ${novoStatus}`);

            fetch("http://localhost:5104/api/denuncia/listar") 
          .then((resposta) => resposta.json())
          .then((dados) => {
              setDenuncias(dados);
          });
            
        })
        .catch((erro) => {
            console.error("❌ Erro ao atualizar status:", erro);
        });
}

   

      return  <div className="container">
      <aside className="sidebar" >
          <img src={fotoLogo} alt="Logo" className="denuncia-logo"/>
          <ul style={{ textDecoration: "none", color: 'black', listStyle:'none'}}>
              <li>
              <a href="#">
                  <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                  </Link>
                  </a>
              </li>
              <li>
                  <a href="#">
                  <Link to="/denuncia-listar" style={{ textDecoration: "none", color: "black" }}>
                  Denúncias registradas
                  </Link>
                  </a>
              </li>
              <li>
                  <a href="#">
                  <Link to="/denuncia" style={{ textDecoration: "none", color: "black" }}>
                  Fazer Denúncia
                  </Link>
                  </a>
              </li>
              <li>
                              <a href="#">
                                      <Link to="/denuncia-editar" style={{ textDecoration: "none", color: "black" }}>
                                   Editar Ocorrência
                                  </Link>
                              </a>
                          </li>
              <li><a href="#">
                              <Link to="/denuncia-analisar" style={{ textDecoration: "none", color: "black" }}>
                              Analisar Ocorrência
                              </Link>
                              </a></li>
              <li>
                          <a href="#">
                              <Link to="/contato" style={{ textDecoration: "none", color: "black" }}>
                              Contato
                              </Link>
                              </a>
                          </li>
          </ul>
      </aside>
  
      <main className="content">
          <h1 id='denuncia-h1'>Editar Status Denúncia</h1>
          <table>
              <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Hora</th>
                  <th>Data</th>
                  <th>Status</th>
              </tr>
  
              {denuncia.map(denuncia => (
                  <tr key={denuncia.id}>
                      <td>{denuncia.id}</td>
                      <td>{denuncia.nome}</td>
                      <td>{denuncia.descricao}</td>
                      <td>
          {denuncia.dataHora
              ? new Date(denuncia.dataHora).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false, // Mantém formato 24h
              })
              : "Hora inválida"}
      </td>
                      <td>
          {denuncia.dataHora
              ? new Date(denuncia.dataHora).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
              })
              : "Data inválida"}
      </td>
      <td><select
            value={denuncia.status} // Define o valor padrão
            onChange={(e) => atualizarStatus(Number(denuncia.id), Number(e.target.value))}
          >
              <option value="1">Não iniciada</option>
                  <option value="2">Em ação</option>
                  <option value="3">Terminada</option>
                  <option value="4">Cancelada</option>
          </select></td>
      
                  </tr>
              ))}
          </table>
      </main>
  </div>
  }

export default EditarDenuncia;