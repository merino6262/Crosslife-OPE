import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <h1 class="logo"><Link to="/"> Cross<span class="green">life</span></Link></h1>

        <button type="button" class='hamburger' data-menu="button" aria-expanded='false' aria-controls='menu'></button>

        <nav class="navigation" id="menu" data-menu="navigation">
          <Link to="/categoria/saúde">Saúde</Link>
          <Link to="/categoria/esportes">Esportes</Link>
          <Link to="/categoria/nutrição">Nutrição</Link>
          <Link to="/categoria/academia">Academia</Link>
          <Link to="/categoria/fitness">Fitness</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
