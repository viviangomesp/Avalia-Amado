import React, { useState } from "react";
import EstrelasAvaliacao from "../form/EstrelasAvaliacao";
import SubmitBotao from "../form/SubmitBotao";

import styles from "./CriarAvaliacaoForm.module.css";

// Componente de formulário para criar avaliações de serviços ou eventos
function CriarAvaliacaoForm({ usuarioId, servicoId, eventoId }) {
  const [avaliacao, setAvaliacao] = useState(0); // Estado para armazenar a avaliação em estrelas
  const [comentario, setComentario] = useState(""); // Estado para armazenar o comentário do usuário
  const [exibirNome, setExibirNome] = useState("sim"); // Estado para controlar se o nome do usuário será exibido na avaliação

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos campos obrigatórios
    const payload = {
      descricao: comentario, // Comentário do usuário
      nota: Number(avaliacao), // Avaliação em estrelas convertida para número
      isAnonimo: exibirNome === "nao", // Verifica se o nome deve ser exibido
    };
    console.log("Payload enviado:", payload); // Log do payload para depuração

    // Verifica se o ID do serviço ou evento foi fornecido
    let url = ""; // Inicializa a URL vazia
    // Define a URL de acordo com o ID do serviço ou evento
    if (servicoId) {
      url = `http://localhost:8080/avaliacoes/servico/${servicoId}/novaAvaliacao?usuarioId=${usuarioId}&servicoId=${servicoId}`;
    } else if (eventoId) {
      url = `http://localhost:8080/avaliacoes/evento/${eventoId}/novaAvaliacao?usuarioId=${usuarioId}&eventoId=${eventoId}`;
    } else {
      alert("ID de serviço ou evento não informado!"); // Alerta se nenhum ID for fornecido
      return;
    }

    try {
      const response = await fetch(url, { // Faz a requisição para o backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // Verifica se a resposta foi aceita
      if (!response.ok) {
        const erro = await response.text();
        console.error("Erro do backend:", erro);
        alert("Erro ao enviar avaliação: " + erro);
      } else {
        alert("Avaliação enviada com sucesso!");
        setAvaliacao(0); // Reseta a avaliação para 0
        setComentario(""); // Reseta o comentário
        setExibirNome("sim"); // Reseta a opção de exibir nome para "sim"
      }
      // Redireciona para a página do serviço ou evento
      if (servicoId) {
        window.location.href = `/Servico/${servicoId}`; // Redireciona para a página do serviço
      } else if (eventoId) {
        window.location.href = `/Evento/${eventoId}`; 
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro na requisição: " + err.message);
    }
  };
  // Renderiza o formulário de avaliação
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Estrelas</h2>
      <EstrelasAvaliacao value={avaliacao} onChange={setAvaliacao} /> {/* exibe as estrelas de avaliação */}

      <div className={styles.exibir_nome_bloco}>
        <span className={styles.exibir_nome_titulo}>
          Exibir meu nome na avaliação?
        </span>
        {/* Opções para exibir ou não o nome do usuário na avaliação */}
        <div className={styles.exibir_nome_opcoes}>
          <label>
            <input
              type="radio"
              name="exibirNome"
              value="sim"
              checked={exibirNome === "sim"} // Verifica se a opção "sim" está selecionada
              onChange={() => setExibirNome("sim")} // Atualiza o estado para "sim" quando selecionado
            />
            Sim
          </label>
          {/* Opção para não exibir o nome do usuário na avaliação */}
          <label>
            <input
              type="radio"
              name="exibirNome"
              value="nao"
              checked={exibirNome === "nao"} // Verifica se a opção "não" está selecionada
              onChange={() => setExibirNome("nao")} // Atualiza o estado para "não" quando selecionado
            /> 
            Não
          </label>
        </div>
      </div>
      {/* Campo de texto para o comentário do usuário */}
      <h2>Avaliação do Evento</h2>
      <textarea // campo de texto para o comentário
        className={styles.textarea}
        placeholder="Deixe um comentário..."
        value={comentario} // valor do comentário
        onChange={(e) => setComentario(e.target.value)} // atualiza o estado do comentário 
      />
      <SubmitBotao text="Enviar Avaliação" className={styles.btnEnviar} />
    </form>
  );
}

export default CriarAvaliacaoForm;
