import { useEffect ,useState } from 'react';
import React from "react";
import fotoLogo from "../img/logoHome.jpg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from './Login.tsx';

function Home(){
    
    return <div>
       <main>
        <div className="container">
            <h1>Sistema De Denúncias<br></br>Ambientais(SDA)</h1>
            <img src={fotoLogo}  alt="Sistema de Denúncias Ambientais" className="image"></img>
            <div className="buttons">
                
                <button className="button denuncia"><Link to="/login" style={{ textDecoration: "none", color: 'white'}}>Fazer Denúncia</Link></button>
                <button className="button registros">Denúncias Registradas</button>
            </div>
        </div>

        </main>
    </div>
}

export default Home;