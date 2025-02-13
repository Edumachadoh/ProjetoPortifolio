import React from 'react';
import "./styleLogin.css";
import Login from "./components/Login"
import fotoHome from "./img/foto-home.jpg";

function App() {
  return (
    <div id='app'>
       

      <div className="container">
          <img src="/foto-home.jpg" alt="Sistema de Denúncias Ambientais" className="image"></img>
          <div className="buttons">
              <button className="button login">Fazer Login</button>
              <button className="button denuncia">Fazer Denúncia</button>
              <button className="button registros">Denúncias Registradas</button>
          </div>
      </div>

    </div>
  );
}

export default App;
