// src/layout/EventoCard/EventoCard.js
import React from 'react';
import styles from './EventoCard.module.css';
import { useNavigate } from 'react-router-dom';
import Capa from '../../img/CapaEvento.png'; 

function EventoCard({ evento }) {
  const navigate = useNavigate();

 if (!evento)  return null;
 
function formatarData(dataISO) {
  if (!dataISO) return 'Data não informada';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano.slice(2)}`;
};

const handleClick = () => {
  navigate(`/evento/${evento.id}`);
};

return (
<div className={styles['eventoCard']}
 onClick={handleClick}
>
  <div className={styles['evento-img-wrapper']}>
    <img
      src={evento.imagem || evento.urlImagem || Capa}
      alt={evento.nome}
      className={styles['evento-img']}
    />
  </div>
  <div className={styles['evento-info']}>
    <h4 className={styles['evento-nome']}>{evento.nome}</h4>
    <p className={styles['evento-local']}>{evento.local}</p>
    <p className={styles['evento-data']}>{formatarData(evento.dataInicial)}</p>
    {new Date(evento.dataInicial) > new Date() ? (
      <p className={styles['evento-aviso']}>Evento ainda não aconteceu</p>
    ) : evento.nota ? (
      <p className={styles['evento-avaliacao']}>Avaliação: {evento.nota.toFixed(1)} ⭐</p>
    ) : (
      <p className={styles['evento-avaliacao']}>Sem avaliações</p>
    )}
  </div>
</div>
);
}

export default EventoCard;

