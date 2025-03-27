import { User, Lock } from "lucide-react";
import "./Cadastro.css";
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import TextBox from "../TextBox/TextBox";
import InputWrapper from "../InputWrapper/InputWrapper";
import InputContainer from "../InputContainer/InputContainer";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();
  const { handleCreateAccount } = useOutletContext();
  return (
    <div className="cadastro-container">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Previne o comportamento padrão do form
          handleCreateAccount(email, senha, confirmarSenha);
        }}
      >
        <h1>Cadastro</h1>
        <InputContainer>
          <InputWrapper icon={User}>
            <Input
              required
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper icon={Lock}>
            <Input
              required
              type="password"
              value={senha}
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper icon={Lock}>
            <Input
              required
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </InputWrapper>
          <TextBox linkText={"Esqueci a senha"} />
        </InputContainer>

        {/* <div className="input-container">
          <div className="input-wrapper">
            <Input
              required
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <User className="icon" />
          </div>
          <div className="input-wrapper">
            <Input
              type="password"
              required
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Lock className="icon" />
          </div>
          <div className="input-wrapper">
            <Input
              required
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <Lock className="icon" />
          </div>
        </div> */}
        <TextBox
          text={"Ja possui uma conta?"}
          linkText={"Entrar"}
          onClick={() => navigate("/")}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};

export default Cadastro;
