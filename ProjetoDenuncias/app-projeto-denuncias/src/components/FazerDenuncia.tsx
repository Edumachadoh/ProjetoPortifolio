import { useEffect ,useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import fotoLogo from "../img/logoHome.jpg";
import { CategoriaDenuncia } from "../interfaces/CategoriaDenuncia"; 
import { Denuncia } from '../interfaces/Denuncia';

function FazerDenuncia(){
    
    const [categoriaDenunciaId, setCategoriaDenunciaId] = useState(0);
    const [categoriaDenuncias, setCategoriaDenuncias] = useState<CategoriaDenuncia[]>([]); 
    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [descricao, setDescricao] = useState("");


    useEffect(() => {
        fetch("http://localhost:5104/api/categoria-denuncia/listar") 
            .then((resposta) => resposta.json())
            .then((dados) => {
                setCategoriaDenuncias(dados);
                console.table(dados);
            });
    }, []);

    function cadastrarDenuncia(e: any) {
        e.preventDefault();
    
        const denuncia: Denuncia = {
          nome: nome,
          descricao: descricao,
          rua: rua,
          bairro: bairro,
          cidade: cidade,
          status: 0,
          categoriaDenunciaId: Number(categoriaDenunciaId),
          usuarioId: 1
        };
    
        fetch("http://localhost:5104/api/denuncia/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(denuncia),
        })
          .then((resposta) => {
            return resposta.json();
          })
          .then((usuario) => {
            console.log("Denuncia cadastrada", denuncia);
            alert("Denuncia cadastrada com sucesso!");
          });
      };



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
        <h1 id='denuncia-h1'>Fazer Denúncia</h1>
        <form onSubmit={cadastrarDenuncia}>
            <div className="input-group">
                <label htmlFor="categoria">Categoria da Denúncia</label>
                <select
                    value={categoriaDenunciaId}
                    onChange={(e) => setCategoriaDenunciaId(Number(e.target.value))}
                    required
                >
                    <option value={0}>Selecione uma categoria</option>
                    {categoriaDenuncias.map((categoriaDenuncia) => (
                    <option key={categoriaDenuncia.id} value={categoriaDenuncia.id}>
                        {categoriaDenuncia.nome}
                    </option>
                    ))}
                </select>
            </div>

                <div className="input-group">
                    <label htmlFor="nome">Título</label>
                    <input
                    placeholder="Digite o título"
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={(e: any) => setNome(e.target.value)}
                />
                </div>    
                <div className="input-group">
                    <label htmlFor="rua">Rua</label>
                    <input
                    placeholder="Digite a rua"
                    type="text"
                    id="rua"
                    name="rua"
                    onChange={(e: any) => setRua(e.target.value)}
                />
                </div>
                <div className="input-group">
                    <label htmlFor="bairro">Bairro</label>
                    <input
                    placeholder="Digite o bairro"
                    type="text"
                    id="bairro"
                    name="bairro"
                    onChange={(e: any) => setBairro(e.target.value)}
                />
                </div>
                <div className="input-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                    placeholder="Digite a cidade"
                    type="text"
                    id="cidade"
                    name="cidade"
                    onChange={(e: any) => setCidade(e.target.value)}
                />
                </div>

            <div className="input-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    rows={4}
                    placeholder="Digite a descrição"
                    id="descricao"
                    name="descricao"
                    onChange={(e: any) => setDescricao(e.target.value)}
                />
            </div>

            <button type="submit" className="btn" >ENVIAR</button>
        </form>
    </main>
</div>
}

export default FazerDenuncia;