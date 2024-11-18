import React, { useState } from 'react';
import './CadastroServicos.css';

function CadastroServicos() {
  const [servicos, setServicos] = useState([]);
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const adicionarServico = () => {
    if (servico && descricao && valor) {
      const novoServico = {
        servico,
        descricao,
        valor,
      };
      setServicos([...servicos, novoServico]);
      setServico('');
      setDescricao('');
      setValor('');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h2>Cadastro de serviços</h2>
      </header>

      <h1 className="main-title">Cadastre um ou mais serviços:</h1>
      <form className="form">
        <input
          type="text"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          placeholder="Informe o nome do serviço"
        />
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Informe a descrição do serviço"
        />
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Informe o valor do serviço"
        />
        <button type="button" className="add-button" onClick={adicionarServico}>
          Adicionar outro serviço
        </button>
      </form>

      <div className="servico-list">
        {servicos.length > 0 ? (
          servicos.map((servico, index) => (
            <div key={index} className="servico-item">
              <h3>{servico.servico}</h3>
              <p>
                <strong>Descrição:</strong> {servico.descricao}
              </p>
              <p>
                <strong>Valor:</strong> R$ {servico.valor}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum serviço cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
}

export default CadastroServicos;
