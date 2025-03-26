import { User, Lock } from "lucide-react";
import "./Cadastro.css";
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Cadastro = ({ handleCreateAccount, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  console.log(email, senha, confirmarSenha);
  return (
    <div className="container">
      <form onSubmit={() => handleCreateAccount(email, senha, confirmarSenha)}>
        <h1>Cadastro</h1>
        <div>
          <Input
            required
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <User className="icon" />
        </div>
        <div>
          <Input
            type="password"
            required
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Lock className="icon" />
        </div>
        <div>
          <Input
            required
            type="password"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <Lock className="icon" />
        </div>
        <div>
          <p>
            Ja possui conta?
            <a href="#" className="links" onClick={onSwitch}>
              Entrar
            </a>
          </p>
        </div>

        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};

export default Cadastro;
