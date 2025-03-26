import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
import Home from "../pages/Home";

const AppRoutes = ({ handleLogin, handleCreateAccount }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/cadastro"
          element={<Cadastro handleCreateAccount={handleCreateAccount} />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
