import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';

function DenunciaAnalisar(){
    
    const [relatorioDenuncias, setRelatorioDenuncias] = useState<Denuncia[]>([]);

    type Relatorio = {
        contTotalDenuncia: number;
        contTotalPessoas: number;
        contCategoriaDenuncia1: number;
        contCategoriaDenuncia2: number;
        contCategoriaDenuncia3: number;
        contCategoriaDenuncia4: number;
        contCategoriaDenuncia5: number;
        contCategoriaDenuncia6: number;
        contCategoriaDenuncia7: number;
        contTotalCidade: number;
        contTotalBairro: number;
      };


      useEffect(() => {
        fetch("http://localhost:5104/api/denuncias-analise") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(arqueologo => {
                setRelatorioDenuncias(arqueologo);
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
        
    </main>
</div>
}

export default DenunciaAnalisar;