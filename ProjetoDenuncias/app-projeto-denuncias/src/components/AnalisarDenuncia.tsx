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
        // armazenar minimo valor de data e maximo para fazer um grafico ao longo do tempo
      };

      useEffect(() => {
        fetch("http://localhost:5104/api/denuncias-analise")
          .then((res) => res.json())
          .then((data) => setRelatorioDenuncias(data))
          .catch((error) => console.error("Erro ao buscar dados:", error));
      }, []); // Executa apenas uma vez ao montar o componente

      useEffect(() => {
        if (relatorioDenuncias) {
          var options = {
            chart: {
              type: 'bar',
              id: 'grafico-denuncias' // ID único para o gráfico
            },
            series: [{
              name: 'Denúncias',
              data: [
                relatorioDenuncias?.contCategoriaDenuncia1 || 0,
                relatorioDenuncias?.contCategoriaDenuncia2 || 0,
                relatorioDenuncias?.contCategoriaDenuncia3 || 0,
                relatorioDenuncias?.contCategoriaDenuncia4 || 0,
                relatorioDenuncias?.contCategoriaDenuncia5 || 0,
                relatorioDenuncias?.contCategoriaDenuncia6 || 0,
                relatorioDenuncias?.contCategoriaDenuncia7 || 0
              ]
            }],
            xaxis: {
              categories: [
                'Mata Atlântica', 'Agropecuária', 'Área Florestal', 
                'Construção', 'Poluição', 'Contaminação', 'Ocupação'
              ],
              title: {
                text: 'Categorias de Denúncias', // Legenda do eixo X
                style: {
                  fontSize: '14px',
                  fontWeight: 'bold'
                }
              }
            },
            yaxis: {
              title: {
                text: 'Número de Denúncias', // Legenda do eixo Y
                style: {
                  fontSize: '14px',
                  fontWeight: 'bold'
                }
              }
            }
          };
        
      
          // Remove gráfico antigo antes de criar um novo
          const chartContainer = document.querySelector("#chart1");
      if (chartContainer) {
        chartContainer.innerHTML = "";
      }

      var chart = new ApexCharts(chartContainer, options);
      chart.render();

      // Atualizar os elementos de texto nos gráficos menores
      const chart2 = document.querySelector("#chart2");
      const chart3 = document.querySelector("#chart3");
      const chart4 = document.querySelector("#chart4");

      if (chart2) {
        chart2.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <h2 style="margin: 0; font-size: 24px;">${relatorioDenuncias.contTotalDenuncia}</h2>
            <p style="margin: 0; font-size: 14px;">Total de Denúncias</p>
          </div>
        `;
      }
      
      if (chart3) {
        chart3.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <h2 style="margin: 0; font-size: 24px;">${relatorioDenuncias.contTotalUsuarios}</h2>
            <p style="margin: 0; font-size: 14px;">Total de Usuários</p>
          </div>
        `;
      }
      if (chart4) {
        chart4.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <h2 style="margin: 0; font-size: 24px;">${relatorioDenuncias.contTotalCidade}</h2>
            <p style="margin: 0; font-size: 14px;">Total de Cidades</p>
          </div>
        `;
      }

      return () => {
        chart.destroy();
      };
    }
  }, [relatorioDenuncias]);
      

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

    <main className="content ">
        <h1 id='denuncia-h1'>Análise de ocorrências</h1>
       

        <div className="container-graficos">
           
            <div className="grafico graficomenor" id="chart2">

            </div>
            <div className="grafico graficomenor" id="chart3">

            </div> 
            <div className="grafico graficomenor" id="chart4">

            </div> 
            <div className="grafico" id="chart1">
            </div>
        </div>
      
    </main>

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>
</div>


}



export default DenunciaAnalisar;