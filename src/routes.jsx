import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tarefas from "./pages/Tarefas";
import Agenda from "./pages/Agenda";
import Assistente from "./pages/Assistente";
import Config from "./pages/Config";
import Sobre from "./pages/Sobre";
import Dicas from "./pages/Dicas";
import Historico from "./pages/Historico";
import Mercado from "./pages/Mercado";
import CozinhaIA from "./pages/CozinhaIA";
import FaxinaIA from "./pages/FaxinaIA";
import MercadoIA from "./pages/MercadoIA";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppRoutes() {
  return (
    <>
      {/* Header fixo */}
      <Header />
      
      {/* Conteúdo principal com scroll */}
      <main className="min-h-screen pt-16 pb-20 mt-8 overflow-y-auto lg:overflow-y-visible">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/assistente" element={<Assistente />} />
          <Route path="/config" element={<Config />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/cozinha-ia" element={<CozinhaIA />} />
          <Route path="/faxina-ia" element={<FaxinaIA />} />
          <Route path="/mercado-ia" element={<MercadoIA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer fixo */}
      <Footer />
    </>
  );
}
