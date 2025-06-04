import React, { useState } from "react";
import EstrelasAvaliacao from "../form/EstrelasAvaliacao";
import SubmitBotao from "../form/SubmitBotao";

import styles from "./CriarAvaliacaoForm.module.css";

function CriarAvaliacaoForm({ usuarioId, servicoId, eventoId }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState("");
  const [exibirNome, setExibirNome] = useState("sim"); // valor padrão

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      descricao: comentario,
      nota: Number(avaliacao),
      isAnonimo: exibirNome === "nao",
    };
    console.log("Payload enviado:", payload);

    let url = "";
    if (servicoId) {
      url = `http://localhost:8080/avaliacoes/servico/${servicoId}/novaAvaliacao?usuarioId=${usuarioId}&servicoId=${servicoId}`;
    } else if (eventoId) {
      url = `http://localhost:8080/avaliacoes/evento/${eventoId}/novaAvaliacao?usuarioId=${usuarioId}&eventoId=${eventoId}`;
    } else {
      alert("ID de serviço ou evento não informado!");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const erro = await response.text();
        console.error("Erro do backend:", erro);
        alert("Erro ao enviar avaliação: " + erro);
      } else {
        alert("Avaliação enviada com sucesso!");
        setAvaliacao(0);
        setComentario("");
        setExibirNome("sim");
      }
      // Redireciona para a página do serviço ou evento
      if (servicoId) {
        window.location.href = `/Servico/${servicoId}`;
      } else if (eventoId) {
        window.location.href = `/Evento/${eventoId}`;
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro na requisição: " + err.message);
    }
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
      <SubmitBotao text="Enviar Avaliação" className={styles.btnEnviar} />
    </form>
  );
}

export default CriarAvaliacaoForm;
