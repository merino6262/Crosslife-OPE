import React from 'react'
import instagram from "../Assets/instagram.svg"
import facebook from "../Assets/facebook.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="footer">
      <section class="footer-info container">
        <div class="footer-contacts">
          <a href="/" class="logo">Cross<span class="green">life</span></a>
          <p class="corpodes">
            Entendendo a carência do mercado em entregar excelentes resultados surgiu o conceito Cross Life. Unimos no mesmo ambiente o cross training e atividades funcionais, nutrição inteligente com acompanhamento personalizado e o desenvolvimento de uma mentalidade evolutiva.
          </p>
          <p class="corpodes">
            Já somos mais de 60.000 pessoas com foco em obter resultados surpreendentes para melhorar o condicionamento físico, eliminar gordura e ganhar massa muscular, uma verdadeira fábrica de resultados.
          </p>
        </div>

        <div class="footer-map">
          <h2 class="title">Mapa do Site</h2>
          <ul class="site-map">
            <li><Link to="/categoria/saúde">Saúde</Link></li>
            <li><Link to="/categoria/esportes">Esportes</Link></li>
            <li><Link to="/categoria/nutrição">Nutrição</Link></li>
            <li><Link to="/categoria/academia">Academia</Link></li>
            <li><Link to="/categoria/fitness">Fitness</Link></li>
          </ul> 
        </div>

        <div class="footer-communication">
          <h2 class="title">Meios de Contato</h2>
          <ul class="communication">
            <li>(11) 93039-6438</li>
            <li>crosslife.figueira@gmail.com</li>
            <li>R. Kaneji Kodama, 1232 - Vila Figueira, Suzano - SP, 08676-410</li>
          </ul> 
        </div>

        <div class="footer-social-network">
          <h2 class="title">Redes Socias</h2>
          <ul class="social-network">
            <li>
              <a href="https://www.instagram.com/crosslifefigueira/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="icone do instagram"/>
              </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/crosslifefigueira/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="icone do facebook"/>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="footer-copy container">
        <a href="/" class="logo">Cross<span class="green">life</span></a>
        <p>FiveTech  2021 - Todos os direitos autorais</p>
      </section>
    </footer>
  )
}

export default Footer
