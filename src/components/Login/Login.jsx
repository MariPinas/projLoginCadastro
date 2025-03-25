import { User, Lock } from "lucide-react";

import "./Login.css";

const Login = ({ onSwitch, props, handleSubmit }) => {
  console.log(props);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            required
            type="email"
            placeholder="E-mail"
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <User className="icon" />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Senha"
            onChange={(e) => props.setSenha(e.target.value)}
          />
          <Lock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#" className="links">
            Esqueci a Senha
          </a>
        </div>
        <div>
          <p>
            Nao tem conta?
            <a href="#" className="links" onClick={onSwitch}>
              Cadastre-se
            </a>
          </p>
        </div>

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
