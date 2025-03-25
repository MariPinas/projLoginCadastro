import "./App.css";
import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";
import { useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "",
      senha: "",
    },
  ]);
  const [confirmSenha, setConfirmSenha] = useState("");

  function handleToggle() {
    setIsLogin(!isLogin);
  }

  function handleSubmit() {
    alert(`Enviando os dados: ${users.email} e ${users.senha}`);
  }
  function handleCreateAccount(email, senha, confirmarSenha) {
    if (email != null || senha != null || confirmarSenha != null) {
      if (senha.match(confirmarSenha)) {
        const newUser = {
          id: users.length + 2,
          email,
          senha,
        };
        setUsers([...users, newUser]);

        alert("Sua conta foi criada! Clique em OK para prosseguir");
        return handleToggle();
      }
      return alert("As senhas nao coincidem");
    }
    return alert("Preencha todos os campos ne bebe");
  }
  return (
    <div className="app">
      {isLogin ? (
        <Login
          onSwitch={handleToggle}
          users={users}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Cadastro
          onSwitch={handleToggle}
          handleCreateAccount={handleCreateAccount}
          users={users}
          confirmSenha={confirmSenha}
        />
      )}
    </div>
  );
}

export default App;
