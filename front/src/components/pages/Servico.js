import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './servico.module.css';
import Capa from '../../img/CapaServico.png'; 
import OnclickBotao from '../layout/OnclickBotao';
import botaostyles from '../layout/OnclickBotao.module.css';

function Servico() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servico, setServico] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const usuarioId = localStorage.getItem('usuarioId');
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetch(`http://localhost:8080/servicos/${id}`)
      .then(res => res.json())
      .then(setServico);

    fetch(`http://localhost:8080/avaliacoes/servico/${id}`)
      .then(res => res.json())
      .then(setAvaliacoes);
  }, [id]);

  const irParaAvaliacao = () => {
    navigate(`/CriarAvaliacao?servicoId=${id}`);
  };

  if (!servico) return <p>Carregando serviço...</p>;

  return (
    <div className={styles.servicoContainer}>
      <div className={styles.topo}>
        {/* Foto à esquerda */}
        <div className={styles.imagemWrapper}>
          <img
            src={servico.imagem || servico.urlImagem || Capa}
            alt={servico.nome || servico.tipo}
            className={styles.imagem}
          />
        </div>
        {/* Informações à direita */}
        <div className={styles.info}>
          <h1>{servico.nome || servico.tipo}</h1>
          <p>{servico.descricao}</p>
          <p><strong>Local:</strong> {servico.local}</p>
          {usuarioId && role === "ADMIN" && (
            <OnclickBotao
              text="Deletar Serviço"
              className={`${botaostyles.botaoDeletar} ${styles.delete}`}
              onClick={() => {
                if (
                  window.confirm("Tem certeza que deseja deletar esse evento?")
                ) {
                  fetch(`http://localhost:8080/servicos/delete/${id}?usuarioId=${usuarioId}`, {
                  method: "DELETE",
                  }).then(() => {
                    navigate("/");
                    window.location.reload();
                  });
                }
              }}
            />
          )}
          {usuarioId && role !== "ADMIN" &&(
            <button className={styles.botaoAvaliar} onClick={irParaAvaliacao}>
              Avaliar Serviço
            </button>
          )}
        </div>
      </div>
      {/* Avaliações embaixo */}
      <div className={styles.avaliacoes}>
        <h2>Avaliações desse serviço</h2>
        {avaliacoes.length === 0 ? (
          <p>Nenhuma avaliação ainda.</p>
        ) : (
          <ul>
            {avaliacoes.map(av => (
              <li key={av.id} className={styles.avaliacaoCard}>
                <strong>{av.isAnonimo ? 'Anônimo' : av.usuario?.nome || 'Usuário'}</strong>
                {' - '}
                <span>{av.nota} ⭐</span>
                <div>{av.descricao}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Servico;