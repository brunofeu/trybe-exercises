import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import trybelogo from '../img/logo.svg';



export default function Header() {
  return (
    <header className="header">
      <nav>
        <div>
          <Link to="/"><img src={trybelogo} alt='Logo da Trybe' /></Link>
        </div>
        <div className="link-hover">
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lectures">Aulas ao Vivo</Link>
          <Link to="/trybe-talks">Trybe-Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </div>
      </nav>
    </header>
  );
}
