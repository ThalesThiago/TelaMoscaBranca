import React, { useState } from 'react';
import './CadastroProdutos.css';

function CadastroProdutos() {
  const [produtos, setProdutos] = useState([]);

  const handleAddProduto = (e) => {
    e.preventDefault();

    const form = e.target.form;
    const novoProduto = {
      nome: form[0].value,
      custo: form[1].value,
      valorVenda: form[2].value,
      numProducao: form[3].value,
      metaLucro: form[4].value,
    };

    setProdutos([...produtos, novoProduto]);

    form.reset();
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h2>Cadastro de produtos</h2>
      </header>

      <h1 className="main-title">Cadastre um ou mais produtos:</h1>
      <form className="form">
        <input type="text" placeholder="Informe o nome do produto" />
        <input
          type="number"
          placeholder="Informe o custo de produção do produto"
        />
        <input
          type="number"
          placeholder="Informe o valor de venda atual do produto"
        />
        <input type="number" placeholder="Informe o número médio de produção" />
        <input type="number" placeholder="Informe a meta de lucro" />
        <button type="button" className="add-button" onClick={handleAddProduto}>
          Adicionar outro produto
        </button>
      </form>

      {/* Lista de Produtos */}
      <div className="product-list">
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div className="product-item" key={index}>
              <h3>{produto.nome}</h3>
              <p>
                <strong>Custo:</strong> R$ {produto.custo}
              </p>
              <p>
                <strong>Valor de Venda:</strong> R$ {produto.valorVenda}
              </p>
              <p>
                <strong>Número de Produção:</strong> {produto.numProducao}
              </p>
              <p>
                <strong>Meta de Lucro:</strong> R$ {produto.metaLucro}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum produto cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
}

export default CadastroProdutos;
