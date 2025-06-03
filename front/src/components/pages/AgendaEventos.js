import React, { useEffect, useState } from 'react';
import EventoCard from '../layout/EventoCard';
import styles from './AgendaEventos.module.css';

function AgendaEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/eventos/futuro') 
      .then(res => res.json())
      .then(setEventos)
      .catch(err => console.error('Erro ao buscar eventos futuros:', err));
  }, []);

return (
  <div>
    <h1>Agenda de Eventos</h1>
    <div className={styles['eventos-grid']}>
      {eventos.length === 0 ? (
        <p>Nenhum evento futuro encontrado.</p>
      ) : (
        eventos.map(evento => (
          <EventoCard key={evento.id} evento={evento} />
        ))
      )}
    </div>
  </div>
);
}

export default AgendaEventos;