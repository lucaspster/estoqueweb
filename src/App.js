import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clientes from "./components/clientes/Clientes";
import Configuracao from "./components/configuracoes/Configuracao";
import Despesas from "./components/despesas/Despesas";
import Financeiro from "./components/financeiro/Financeiro";
import Home from "./components/home/Home";
import Relatorios from "./components/relatorios/Relatorios";
import Servicos from "./components/servicos/Servicos";
import Usuarios from "./components/usuarios/Usuarios";
import Vendas from "./components/vendas/Vendas";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App" style={{ display: "flex", "flex-direction": "row" }}>
      <div style={{}}>
        <Menu />
      </div>
      <div style={{}}>
        <Clientes />
        <Despesas />
        <Financeiro />
        <Home />
        <Relatorios />
        <Servicos />
        <Usuarios />
        <Vendas />
        <Configuracao />
      </div>
    </div>
  );
}

export default App;
