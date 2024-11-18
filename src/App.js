import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CadastroProdutos from './CadastroProdutos';
import CadastroServicos from './CadastroServicos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
      <Route path="/cadastro-servicos" element={<CadastroServicos />} />{' '}
      {/* Rota para CadastroServicos */}
    </Routes>
  );
}

export default App;
