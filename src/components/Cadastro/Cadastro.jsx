import { User, Lock } from "lucide-react";
import "./Cadastro.css";
import { useState } from "react";

const Cadastro = ({ handleCreateAccount, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  console.log(email, senha, confirmarSenha);
  return (
    <div className="container">
      <h1>Cadastro</h1>
      <div>
        <input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <User className="icon" />
      </div>
      <div>
        <input
          type="password"
          required
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Lock className="icon" />
      </div>
      <div>
        <input
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

      <button onClick={() => handleCreateAccount(email, senha, confirmarSenha)}>
        Cadastrar
      </button>
    </div>
  );
};

export default Cadastro;
