import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="page-inner-content-login">
      <div className="container-login">
      <div className="logo-login">
      <img src="/images/logo-image.png" alt="Logo do site"/>
      </div>

      <div className="main-content-login">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Digite seu email" required/>
      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" placeholder="Digite sua senha" pattern=".{8,}" title="A senha deve ter pelo menos 8 caracteres" required/>
      </div>
      <div className="btn-login">
        <button>Login</button>

        <Link to={'/register'}>
        <button>Cadastre-se</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
