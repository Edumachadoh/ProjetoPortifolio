import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';

function ListarDenuncia(){
    
    const [denuncia, setDenuncias] = useState<Denuncia[]>([]);


    useEffect(() => {
        fetch("http://localhost:5104/api/denuncia/listar") 
            .then((resposta) => resposta.json())
            .then((dados) => {
                setDenuncias(dados);
                console.table(dados);
            });
    }, []);

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
            <li><a href="#">Análise de ocorrências</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </aside>

    <main className="content">
        <h1 id='denuncia-h1'>Listar Denúncia</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Rua</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Status</th>
                <th>Categoria denúncia</th>
                <th>Hora</th>
                <th>Data</th>
            </tr>

            {denuncia.map(denuncia => (
                <tr key={denuncia.id}>
                    <td>{denuncia.id}</td>
                    <td>{denuncia.nome}</td>
                    <td>{denuncia.descricao}</td>
                    <td>{denuncia.rua}</td>
                    <td>{denuncia.bairro}</td>
                    <td>{denuncia.cidade}</td>
                    <td>{denuncia.status}</td>
                    <td>{denuncia.categoriaDenunciaId}</td>
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
    
                </tr>
            ))}
        </table>
    </main>
</div>
}

export default ListarDenuncia;