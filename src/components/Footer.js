import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe nosso aplicativo</p>
          <p>Baixe nosso aplicativo para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
        <img src="/images/logo-image.png" alt="Logo do site"/> 
          <p>
          O objetivo da TRESCOLAR é simplificar e otimizar a gestão de transporte escolar,
          oferecendo uma solução abrangente que inclui administração financeira, organização
          de itinerários e automação de processos.
          </p>
        </div>
        <div className="links">
          <h3>Links úteis</h3>
          <ul>
            <li><Link to="/">WhatsApp</Link></li>
            <li><Link to="/">Políticas</Link></li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2030 - TR<b>ESCOLAR</b> - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
