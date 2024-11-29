import React, { useState } from "react";
import {
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <img className="logo" src="/images/logo-image.png" alt="Logo do site"/>        
        <nav className={`${show && "show"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
            <li>
              <Link to="/Login">Conta</Link>
            </li>
          </ul>
        </nav>
        <div className="navs-icon-container">
          <Link to="/Login">
          <button className="menu-button-login">
          <FontAwesomeIcon icon={faRightToBracket} />
          </button>
          </Link>
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      </div>
  );
}
