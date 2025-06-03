import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServicoCard.module.css';
import Capa from '../../img/CapaServico.png';

function ServicoCard({ servico }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/servico/${servico.id}`)}
      style={{ cursor: 'pointer' }}
    >
      {/* Espaço para imagem do serviço */}
      <div className={styles['servico-img-wrapper']}>
        <img
          src={servico.imagem || servico.urlImagem || Capa}
          alt={servico.nome || servico.tipo}
          className={styles['servico-img']}
        />
      </div>
      <h3>{servico.nome || servico.tipo}</h3>
      <p>{servico.descricao}</p>
      <p><strong>Local:</strong> {servico.local}</p>
    </div>
  );
}

export default ServicoCard;