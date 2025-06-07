import React, { useState } from 'react';
import styles from './Pesquisa.module.css';

function Pesquisa({ onBuscar }) {
  const [busca, setBusca] = useState('');

  const handleBuscar = (e) => {
    e.preventDefault();
    if (busca.trim() !== '') {
      onBuscar(busca);
    }
  };

  return (
    <div className={styles.pesquisaContainer}>
      <h2><strong>Pesquisar eventos</strong></h2>
      <form onSubmit={handleBuscar} style={{ display: 'flex', width: '100%' }}>
        <input
          type="text"
          placeholder="Digite o nome ou local do evento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.pesquisaInput}
        />
        <button type="submit" className={styles.botaoBusca}>Buscar</button>
      </form>
    </div>
  );
}

export default Pesquisa;