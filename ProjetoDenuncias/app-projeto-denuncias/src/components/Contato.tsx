import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';
import ApexCharts from 'apexcharts';


function DenunciaAnalisar(){

    function enviarMensagem() {

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
            <li>
            <a href="#">
                <Link to="/denuncia-analisar" style={{ textDecoration: "none", color: "black" }}>
                Analisar Ocorrência
                </Link>
                </a>
            </li>
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
        <h1 id='denuncia-h1'>Contato</h1>
        <div className="contato-container">
                    <div className="formulario">
                        <h2>Contate-Nos</h2>
                        <form className='form-contato' onSubmit={enviarMensagem}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Digite seu nome"/>

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Digite seu email"/>

                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" placeholder="Digite uma mensagem"></textarea>

                            <div className="termos">
                                <input type="checkbox" id="terms"/>
                                <label htmlFor="terms">I accept the <a href="#">Terms of Service</a></label>
                            </div>

                            <button type="submit">ENVIAR</button>
                        </form>
                    </div>

                    <div className="informacoes">
                        <h3>LIGAÇÂO</h3>
                        <p>(47) 992087517</p>

                        <h3>LOCALIZAÇÃO</h3>
                        <p>Rua Padre Anchieta, Bigorrilho<br/>Curitiba - PR</p>

                        <h3>REDES SOCIAIS</h3>
                        <p>Instagram: em breve <br />X: em breve <br />Telegram: em breve</p>
                    </div>
                </div>
    </main>
</div>
}

export default DenunciaAnalisar;