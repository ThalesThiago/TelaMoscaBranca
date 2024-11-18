import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook
import './App.css';

function Home() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="container">
      <header className="header">
        <button className="back-button">←</button>
        <h2>Formulário inicial</h2>
      </header>

      <h1 className="main-title">O que você está cadastrando?</h1>

      <div className="button-container">
        <button
          className="option-button"
          onClick={() => navigate('/cadastro-produtos')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2649/2649383.png"
            alt="Produto"
            className="icon"
          />
          Um produto
        </button>
        <button
          className="option-button"
          onClick={() => navigate('/cadastro-servicos')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/75/75668.png"
            alt="Serviço"
            className="icon"
          />
          Um serviço
        </button>
      </div>
    </div>
  );
}

export default Home;
