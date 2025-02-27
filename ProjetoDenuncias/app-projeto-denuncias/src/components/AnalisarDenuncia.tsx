import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';
import ApexCharts from 'apexcharts';


function DenunciaAnalisar(){
    
    const [relatorioDenuncias, setRelatorioDenuncias] = useState<Relatorio | null>(null); // Tipo explícito

    type Relatorio = {
        contTotalDenuncia: number;
        contTotalUsuarios: number;
        contTotalCidade: number;
        contTotalBairro: number;
        contCategoriaDenuncia1: number;
        contCategoriaDenuncia2: number;
        contCategoriaDenuncia3: number;
        contCategoriaDenuncia4: number;
        contCategoriaDenuncia5: number;
        contCategoriaDenuncia6: number;
        contCategoriaDenuncia7: number;
      };


      useEffect(() => {
        fetch("http://localhost:5104/api/denuncias-analise") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(relatorio => {
                setRelatorioDenuncias(relatorio);
            });
        });

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
                <Link to="/denuncia-analisar" style={{ textDecoration: "none", color: "black" }}>
                Analisar Ocorrência
                </Link>
                </a>
            </li>
            <li><a href="#">Contato</a></li>
        </ul>
    </aside>

    <main className="content">
        <h1 id='denuncia-h1'>Análise de ocorrências</h1>
        <table>
  <thead>
    <tr>
      <th>Total de Denúncias</th>
      <th>Total de Usuários</th>
      <th>Total de Cidades</th>
      <th>Total de Bairros</th>
      <th>Categoria 1 - Mata Atlântica</th>
      <th>Categoria 2 - Agropecuária</th>
      <th>Categoria 3 - Área Florestal</th>
      <th>Categoria 4 - Construção</th>
      <th>Categoria 5 - Poluição</th>
      <th>Categoria 6 - Contaminação</th>
      <th>Categoria 7 - Ocupação</th>
    </tr>
  </thead>
  <tbody>
    {relatorioDenuncias ? (
      <tr>
        <td>{relatorioDenuncias.contTotalDenuncia ?? 0}</td>
        <td>{relatorioDenuncias.contTotalUsuarios ?? 0}</td>
        <td>{relatorioDenuncias.contTotalCidade ?? 0}</td>
        <td>{relatorioDenuncias.contTotalBairro ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia1 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia2 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia3 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia4 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia5 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia6 ?? 0}</td>
        <td>{relatorioDenuncias.contCategoriaDenuncia7 ?? 0}</td>
      </tr>
    ) : (
      <tr>
        <td colSpan={11}>Carregando dados...</td>
      </tr>
    )}
  </tbody>
  
</table>
    </main>
</div>
}

export default DenunciaAnalisar;