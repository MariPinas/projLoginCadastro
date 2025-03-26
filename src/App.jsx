import "./App.css";
import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";
import { useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);

  function handleToggle() {
    setIsLogin(!isLogin);
  }

  function handleCreateAccount(email, senha, confirmarSenha) {
    if (email && senha && confirmarSenha) {
      if (senha === confirmarSenha) {
        const newUser = {
          id: users.length + 1,
          email,
          senha,
        };
        setUsers([...users, newUser]);
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        localStorage.setItem(
          "users",
          JSON.stringify([...storedUsers, newUser])
        );

        alert("Sua conta foi criada! Clique em OK para prosseguir");
        return handleToggle();
      } else alert("As senhas não coincidem");
    } else alert("Preencha todos os campos, por favor!");
  }

  function handleLogin(email, senha) {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.find(
      (users) => users.email === email && users.senha === senha
    );
    console.log("lista users", users);
    console.log("usuario encontrado", userExists);
    if (userExists) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha incorretos");
    }
  }

  return (
    <div className="app">
      {isLogin ? (
        <Login onSwitch={handleToggle} handleLogin={handleLogin} />
      ) : (
        <Cadastro
          onSwitch={handleToggle}
          handleCreateAccount={handleCreateAccount}
        />
      )}
    </div>
  );
}

export default App;
