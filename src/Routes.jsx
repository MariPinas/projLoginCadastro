import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Cadastro from "./components/Cadastro/Cadastro.jsx";
import Home from "./pages/Home.jsx";

const AppRoutes = ({ handleLogin, handleCreateAccount }) => {
  return (
    <Routes>
      <Route path="/" element={<Login handleLogin={handleLogin} />} />
      <Route
        path="/cadastro"
        element={<Cadastro handleCreateAccount={handleCreateAccount} />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
