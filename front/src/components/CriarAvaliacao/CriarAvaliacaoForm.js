import React, { useState } from 'react';
import EstrelasAvaliacao from '../form/EstrelasAvaliacao';
import SubmitBotao from '../form/SubmitBotao';

import styles from './CriarAvaliacaoForm.module.css';

function CriarAvaliacaoForm({ onSubmit }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState("");
  const [exibirNome, setExibirNome] = useState("sim"); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ avaliacao, comentario, exibirNome });
    setAvaliacao(0);
    setComentario("");
    setExibirNome("sim");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Estrelas</h2>
      <EstrelasAvaliacao value={avaliacao} onChange={setAvaliacao} />

      <div className={styles.exibir_nome_bloco}>
        <span className={styles.exibir_nome_titulo}>
          Exibir meu nome na avaliação?
        </span>
        <div className={styles.exibir_nome_opcoes}>
          <label>
            <input
              type="radio"
              name="exibirNome"
              value="sim"
              checked={exibirNome === "sim"}
              onChange={() => setExibirNome("sim")}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="exibirNome"
              value="nao"
              checked={exibirNome === "nao"}
              onChange={() => setExibirNome("nao")}
            />
            Não
          </label>
        </div>
      </div>
        <h2>Avaliação do Evento</h2>
      <textarea
        className={styles.textarea}
        placeholder="Deixe um comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <SubmitBotao  text="Enviar Avaliação" className={styles.btnEnviar} />
    </form>
  );
}

export default CriarAvaliacaoForm;