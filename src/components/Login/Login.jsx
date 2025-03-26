import { User, Lock } from "lucide-react";
import { useState } from "react";
import "./Login.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = ({ onSwitch, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="container">
      <form onSubmit={() => handleLogin(email, senha)}>
        <h1>Login</h1>
        <div>
          <Input
            required
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <User className="icon" />
        </div>
        <div>
          <Input
            required
            type="password"
            value={senha}
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <Lock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <Input type="checkbox" />
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

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
