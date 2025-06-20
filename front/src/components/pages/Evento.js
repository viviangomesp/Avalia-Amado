import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Evento.module.css";
import Capa from "../../img/CapaEvento.png";
import OnclickBotao from "../layout/OnclickBotao";
import botaostyles from "../layout/OnclickBotao.module.css";

function Evento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evento, setEvento] = useState(null);
  const [avaliacaoUsuario, setAvaliacaoUsuario] = useState(null);
  const [media, setMedia] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const usuarioId = localStorage.getItem("usuarioId");
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetch(`http://localhost:8080/eventos/${id}`)
      .then((res) => res.json())
      .then(setEvento);

    fetch(`http://localhost:8080/avaliacoes/evento/${id}/media`)
      .then((res) => res.json())
      .then((val) => setMedia(Number(val)));

    fetch(`http://localhost:8080/avaliacoes/evento/${id}`)
      .then((res) => res.json())
      .then(setAvaliacoes);
  }, [id, usuarioId]);

  function formatarData(dataStr) {
    if (!dataStr) return "";
    const [ano, mes, dia] = dataStr.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  function formatarHora(horaStr) {
    if (!horaStr) return "";
    const [hora, minuto] = horaStr.split(":");
    return `${hora.padStart(2, "0")}:${minuto.padStart(2, "0")}`;
  }

  // Usa dataFinal se existir, senão dataInicial
  function eventoJaAconteceu(evento) {
    if (!evento) return false;
    const dataStr = evento.dataFinal || evento.dataInicial;
    if (!dataStr) return false;
    const [ano, mes, dia] = dataStr.split("-");
    const dataEvento = new Date(
      Number(ano),
      Number(mes) - 1,
      Number(dia),
      23,
      59,
      59
    );
    const hoje = new Date();
    return dataEvento < hoje;
  }

  const irParaAvaliacao = () => {
    navigate(`/CriarAvaliacao/evento/${id}`);
  };

  if (!evento) return <p>Carregando evento...</p>;

  return (
    <div className={styles.eventoContainer}>
      <div className={styles.linha}>
        <div className={styles["imagem-wrapper"]}>
          <img
            src={evento.imagemUrl || evento.imagem || evento.urlImagem || Capa}
            alt={evento.nome}
            className={styles.imagemEvento}
          />
        </div>
        <div className={styles.eventoInfo}>
          <h1>
            {evento.nome} - {formatarData(evento.dataInicial)}
            {evento.dataFinal && evento.dataFinal !== evento.dataInicial
              ? ` até ${formatarData(evento.dataFinal)}`
              : ""}
          </h1>
          {/*mostrar hora inicial e final do evento*/}
          <div className={styles.horaEvento}>
            <p>
              Hora Inicial: {formatarHora(evento.horaInicial)}
              {evento.horaFinal && evento.horaFinal !== evento.horaInicial
                ? ` - Hora Final: ${formatarHora(evento.horaFinal)}`
                : ""}
            </p>
          </div>
          <p>
            <strong>{evento.local}</strong>
          </p>
          <p>{evento.descricao}</p>
          {media !== null && !isNaN(Number(media)) && (
            <div className={styles.mediaAvaliacao}>
              Média das avaliações:{" "}
              <strong>{Number(media).toFixed(1)} ⭐</strong>
            </div>
          )}
          {/*botão para APENAS ADM deletar evento*/}
          {usuarioId && role === "ADMIN" && (
            <OnclickBotao
              text="Deletar Evento"
              className={`${botaostyles.botaoDeletar} ${styles.delete}`}
              onClick={() => {
                if (
                  window.confirm("Tem certeza que deseja deletar esse evento?")
                ) {
                  fetch(
                    `http://localhost:8080/eventos/delete/${id}?usuarioId=${usuarioId}`,
                    {
                      method: "DELETE",
                    }
                  ).then(() => {
                    navigate("/");
                    window.location.reload();
                  });
                }
              }}
            />
          )}
          {usuarioId && role !== "ADMIN" ? (
            eventoJaAconteceu(evento) ? (
              avaliacaoUsuario ? (
                <button className={styles.botaoDesabilitado} disabled>
                  Você já avaliou esse evento
                </button>
              ) : (
                <button className={styles.cadastro} onClick={irParaAvaliacao}>
                  Avaliar Evento
                </button>
              )
            ) : (
              <button className={styles.botaoDesabilitado} disabled>
                Você poderá avaliar esse evento assim que ele acabar.
              </button>
            )
          ) : null}
        </div>
      </div>

      <div className={styles.avaliacoesContainer}>
        <h2 style={{ textAlign: "center" }}>Avaliações desse evento</h2>
        {avaliacoes.length === 0 ? (
          <p style={{ textAlign: "center" }}>Nenhuma avaliação ainda.</p>
        ) : (
          <div className={styles.listaAvaliacoes}>
            {avaliacoes.map((av) => (
              <div key={av.id} className={styles.avaliacaoBox}>
                <div>
                  <strong>{av.nomeUsuario}</strong>
                  {" - "}
                  <span>{av.nota} ⭐</span>
                </div>
                <div>{av.descricao}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Evento;
