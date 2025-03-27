import { User, Lock } from "lucide-react";
import { useState } from "react";
import "./Login.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useNavigate, useOutletContext } from "react-router-dom";
import TextBox from "../TextBox/TextBox";
import InputContainer from "../InputContainer/InputContainer";
import InputWrapper from "../InputWrapper/InputWrapper";

const Login = () => {
  const { handleLogin } = useOutletContext();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Previne o comportamento padrão do form
          handleLogin(email, senha);
        }}
      >
        <h1>Login</h1>
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
          <TextBox linkText={"Esqueci a senha"} />
        </InputContainer>

        {/* <div className="input-container">
          <div className="input-wrapper">
            <Input
              required
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <User className="icon" />
          </div>

          <div className="input-wrapper">
            <Input
              required
              type="password"
              value={senha}
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <Lock className="icon" />
          </div>
          <TextBox linkText={"Esqueci a senha"} />
        </div> */}

        <div className="lembrar">
          <input className="caixinha" type="checkbox" />
          <label htmlFor="#" className="label">
            Lembre de mim
          </label>
        </div>
        <Button type="submit">Entrar</Button>

        <TextBox
          text={"Nao possui conta?"}
          linkText={"Cadastrar"}
          onClick={() => navigate("/cadastro")}
        />
      </form>
    </div>
  );
};

export default Login;
