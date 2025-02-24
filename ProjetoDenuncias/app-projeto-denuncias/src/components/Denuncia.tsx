import { useEffect ,useState } from 'react';
import React from "react";
import { useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";

function Denuncia(){
    
    const location = useLocation();
    const email = location.state?.email || "Desconhecido";

    return  <div className="container">
    <aside className="sidebar">
        <img src={fotoLogo} alt="Logo" className="logo"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Denúncias registradas</a></li>
            <li><a href="#">Fazer denúncia</a></li>
            <li><a href="#">Análise de ocorrências</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </aside>

    <main className="content">
        <h1>Registro de Denúncia</h1>
        <form>
            <div className="input-group">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria">
                    <option value="">Selecione</option>
                    <option value="desmatamento">Desmatamento</option>
                    <option value="queimada">Queimada</option>
                    <option value="mineração">Mineração</option>
                </select>
            </div>

            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="rua">Rua</label>
                    <input type="text" id="rua" placeholder="Digite a rua"/>
                </div>
                <div className="input-group">
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" id="bairro" placeholder="Digite o bairro"/>
                </div>
                <div className="input-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="cidade" placeholder="Digite a cidade"/>
                </div>
            </div>

            <div className="input-group">
                <label htmlFor="complemento">Complemento</label>
                <input type="text" id="complemento" placeholder="Digite um complemento"/>
            </div>

            <div className="input-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" placeholder="Descreva o problema"></textarea>
            </div>

            <button type="submit" className="btn">ENVIAR</button>
        </form>
    </main>
</div>
}

export default Denuncia;