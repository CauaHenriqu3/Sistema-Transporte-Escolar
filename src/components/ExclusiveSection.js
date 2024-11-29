import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import gif from "./exclusive.gif";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Por que assinar o TR<b>ESCOLAR</b>?</h2>
            <p>
            Otimize a gestão do seu serviço de transporte escolar 
            com o Trescolar! Simplificamos suas operações oferecendo 
            uma solução abrangente para gerenciar finanças, clientes 
            e contratos. Diga adeus ao estresse e à desorganização. 
            Assine agora e leve sua empresa para o próximo nível!
            </p>
            <Link to="/Login" className="see-more-btn">
              <span>Sign-Up</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
          <img src={gif} alt="Meu GIF" />
          </div>
        </div>
      </div>
    </div>
  );
}
