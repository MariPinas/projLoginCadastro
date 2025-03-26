import { User, Lock } from "lucide-react";
import { useState } from "react";
import "./Login.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useOutletContext();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Previne o comportamento padrão do form
          handleLogin(email, senha);
        }}
      >
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
            <a href="#" className="links" onClick={() => navigate("/cadastro")}>
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
