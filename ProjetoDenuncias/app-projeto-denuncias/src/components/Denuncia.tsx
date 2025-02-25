import { useEffect ,useState } from 'react';
import React from "react";
import { useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 

function Denuncia(){
    
    const location = useLocation();
    const email = location.state?.email || "Desconhecido";
    const [categoriaDenunciaId, setCategoriaDenunciaId] = useState(0);
    const [categoriaDenuncias, setCategoriaDenuncias] = useState<CategoriaDenuncia[]>([]); 

    useEffect(() => {
        fetch("http://localhost:5104/api/categoria-denuncia/listar") 
            .then((resposta) => resposta.json())
            .then((dados) => {
                setCategoriaDenuncias(dados);
                console.table(dados);
            });
    }, []);




    return  <div className="container">
    <aside className="sidebar" >
        <img src={fotoLogo} alt="Logo" className="denuncia-logo"/>
        <ul style={{ textDecoration: "none", color: 'black', listStyle:'none'}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Denúncias registradas</a></li>
            <li><a href="#">Fazer denúncia</a></li>
            <li><a href="#">Análise de ocorrências</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </aside>

    <main className="content">
        <h1 id='denuncia-h1'>Registro de Denúncia</h1>
        <form>
            <div className="input-group">
                <label htmlFor="categoria">Categoria</label>
                <select
                    value={categoriaDenunciaId}
                    onChange={(e) => setCategoriaDenunciaId(Number(e.target.value))}
                    required
                >
                    <option value={0}>Selecione um arqueólogo</option>
                    {categoriaDenuncias.map((categoriaDenuncia) => (
                    <option key={categoriaDenuncia.id} value={categoriaDenuncia.id}>
                        {categoriaDenuncia.nome}
                    </option>
                    ))}
                </select>
            </div>

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