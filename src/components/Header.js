import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Bem vindo(a) ao TR<b>ESCOLAR!</b></h2>
          <p>Gestão simplificada para serviços de transporte
             escolar. Controle financeiro, gestão de clientes
              e muito mais em uma plataforma intuitiva. Diga
               adeus ao caos, comece hoje!</p>
          <Link to="/Login" className="see-more-btn">
            <span>Sign-Up</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          </div>
          <div className="right-side">
            <img src="/images/header-image.png" alt="Products"/>
        </div>
      </div>
    </header>
  );
}
