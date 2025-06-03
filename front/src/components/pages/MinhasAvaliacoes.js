import React, { useEffect, useState } from 'react';
import EventoCard from '../layout/EventoCard';
import './MinhasAvaliacoes.module.css';
import { useNavigate } from 'react-router-dom';

function MinhasAvaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId'); 
 if (!usuarioId) {
      navigate('/cadastro'); // REDIRECIONA P cadastro/login
      return;
    }

    fetch(`http://localhost:8080/avaliacoes/usuario/${usuarioId}`)
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data))
      .catch((err) => console.error('Erro ao buscar avaliações:', err));
  }, [navigate]);

  return (
    <div className="minhas-avaliacoes-container">
      <h2>Minhas Avaliações</h2>
      <div className="avaliacoes-grid">
        {avaliacoes.length === 0 ? (
          <p className="vazio">Você ainda não avaliou nenhum evento.</p>
        ) : (
          avaliacoes.map((avaliacao) => (
            <EventoCard key={avaliacao.id} evento={avaliacao.evento} />
          ))
        )}
      </div>
    </div>
  );
}

export default MinhasAvaliacoes;