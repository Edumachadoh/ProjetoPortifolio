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
    const [categoriaDenunciaId, setCategoriaDenunciaId] = useState(0);
    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState(0);


    useEffect(() => {

        console.log("ID recebido no useEffect:", id);

        if (id) {
          axios
            .get<Denuncia>(
              `http://localhost:5104/api/denuncia/buscar/${id}`
            )
            .then((resposta) => {
            console.log("Dados recebidos:", resposta.data);
              setNome(resposta.data.nome);
              setRua(resposta.data.rua);
              setBairro(resposta.data.bairro);
              setCidade(resposta.data.cidade);
              setCategoriaDenunciaId(resposta.data.categoriaDenunciaId);
              setDescricao(resposta.data.descricao);
              setStatus(resposta.data.status);
            });
        }
      }, []);

   

    function salvarDenuncia(e: any) {
        e.preventDefault();
    
        const denuncia: Denuncia = {
            nome: nome,
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            categoriaDenunciaId: Number(categoriaDenunciaId),
            descricao: descricao,
            status: Number(status),
            usuarioId: 0
        };
    
        axios
          .put(`http://localhost:5104/api/denuncia/alterar/${id}`, denuncia)
          .then((resposta) => {
            console.log(resposta.data);
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
        <h1 id='denuncia-h1'>Editar Denúncia</h1>
        <form onSubmit={salvarDenuncia}>
            <div className="form-group">
            <label htmlFor="nome">Nome</label>
                <input
                placeholder="José Pereira"
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    required
                    onChange={(e: any) => setNome(e.target.value)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
                <input
                placeholder="Cidade"
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={cidade}
                    required
                    onChange={(e: any) => setCidade(e.target.value)}
                />
            </div>
            <button type="submit">Editar</button>
        </form>
      {/* <div className="form-group">
      <label htmlFor="cpf">Cpf</label>
          <input
          placeholder="000.000.000-00"
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            required
            onChange={(e: any) => setCpf(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
          placeholder="19"
            type="text"
            id="dataNascimento"
            name="dataNascimento"
            value={dataNascimento}
            required
            onChange={(e: any) => setDatanascimento(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="anosExperiencia">Anos de Experiência</label>
          <input
          placeholder="3"
            type="text"
            id="anosExperiencia"
            name="anosExperiencia"
            value={anosExperiencia}
            required
            onChange={(e: any) => setAnosExperiencia(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="idRegistroProfissional">Registro Profissional</label>
          <input
          placeholder="12355532"
            type="text"
            id="idRegistroProfissional"
            name="idRegistroProfissional"
            value={idRegistroProfissional}
            required
            onChange={(e: any) => setIdRegistroProfissional(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label>Formação Acadêmica:</label>
        <select
          value={formacaoAcademicaId} // Define o valor padrão
          onChange={(e: any) => setFormacaoAcademicaId(Number(e.target.value))}
        >
          <option value={0}>Selecione uma formação acadêmica</option> {1}
          {formacoesAcademicas.map((formacaoAcademica) => (
            <option
              value={formacaoAcademica.id}
              key={formacaoAcademica.id}
            >
              {formacaoAcademica.nome}
            </option>
          ))}
        </select>
      </div> */}
      
        {/* <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Rua</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Categoria denúncia</th>
                <th>Hora</th>
                <th>Data</th>
                <th>Status</th>
            </tr>

            {denuncia.map(denuncia => (
                <tr key={denuncia.id}>
                    <td>{denuncia.id}</td>
                    <td>{denuncia.nome}</td>
                    <td>{denuncia.descricao}</td>
                    <td>{denuncia.rua}</td>
                    <td>{denuncia.bairro}</td>
                    <td>{denuncia.cidade}</td>
                    <td>{denuncia.categoriaDenuncia?.nome}</td>
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
          onChange={(e: any) => setStatus(Number(e.target.value))}
        >
            <option value="1">Não iniciada</option>
                <option value="2">Em ação</option>
                <option value="3">Terminada</option>
                <option value="4">Cancelada</option>
        </select></td>
    
                </tr>
            ))}
        </table> */}
    </main>
</div>
}

export default EditarDenuncia;