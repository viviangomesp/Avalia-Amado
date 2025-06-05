import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import EventoCard from "../layout/EventoCard";
import ServicoCard from "../layout/ServicoCard";

function Home() {
  const [servicos, setServicos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [eventosDestaque, setEventosDestaque] = useState([]);
  const [eventosFuturos, setEventosFuturos] = useState([]);
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [resultadosServicos, setResultadosServicos] = useState([]);
  const [buscou, setBuscou] = useState(false);
  const usuarioId = localStorage.getItem("usuarioId");
  const isLogged = () => !!usuarioId;

  // Busca todos os serviços
  useEffect(() => {
    fetch("http://localhost:8080/servicos/all")
      .then((res) => res.json())
      .then((data) => setServicos(Array.isArray(data) ? data : []));
  }, []);

  // Busca todos os eventos para pesquisa
  useEffect(() => {
    fetch("http://localhost:8080/eventos/all")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEventos(data);
        else if (Array.isArray(data.content)) setEventos(data.content);
        else setEventos([]);
      });
  }, []);

  // Busca eventos em destaque (mais bem avaliados)
  useEffect(() => {
    fetch("http://localhost:8080/eventos/notaMediaDesc")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEventosDestaque(data);
        else if (Array.isArray(data.content)) setEventosDestaque(data.content);
        else setEventosDestaque([]);
      });
  }, []);

  // Busca eventos futuros para "Próximos Eventos"
  useEffect(() => {
    fetch("http://localhost:8080/eventos/futuro")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEventosFuturos(data);
        else if (Array.isArray(data.content)) setEventosFuturos(data.content);
        else setEventosFuturos([]);
      });
  }, []);

  // Função de busca para eventos e serviços
  const handleBuscar = (e) => {
    e.preventDefault();
    setBuscou(true);
    if (!busca.trim()) {
      setResultados([]);
      setResultadosServicos([]);
      return;
    }
    const termo = busca.trim().toLowerCase();

    // Busca em eventos
    const eventosFiltrados = eventos.filter(ev =>
      ev.nome.toLowerCase().includes(termo) ||
      ev.local.toLowerCase().includes(termo)
    );
    setResultados(eventosFiltrados);

    // Busca em serviços
    const servicosFiltrados = servicos.filter(sv =>
      (sv.nome && sv.nome.toLowerCase().includes(termo)) ||
      (sv.tipo && sv.tipo.toLowerCase().includes(termo)) ||
      (sv.local && sv.local.toLowerCase().includes(termo))
    );
    setResultadosServicos(servicosFiltrados);
  };

  // Função para resetar a home
  const handleHome = () => {
    setBusca("");
    setResultados([]);
    setResultadosServicos([]);
    setBuscou(false);
  };

  return (
    <div className={styles.homeContainer}>
      {/* 1 - Login/Cadastro */}
      <div>
        <nav className={styles.topBar}>
          {!isLogged() && (
            <Link to="/Cadastro" className={styles.cadastro}>
              Login/Cadastro
            </Link>
          )}
        </nav>
      </div>

      {/* 2 - Pesquisar eventos + barra */}
      <div>
        <section className={styles.secaoEventos}>
          <h2>Pesquisar eventos ou serviços</h2>
          <form
            style={{ display: "flex", width: "100%" }}
            onSubmit={handleBuscar}
          >
            <input
              type="text"
              placeholder="Digite o nome ou local do evento ou serviço..."
              className={styles.pesquisaInput}
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value);
                setBuscou(false);
              }}
            />
            <button type="submit" className={styles.botaoBusca}>
              Buscar
            </button>
          </form>
          {/* Botão "Voltar para o início" */}
          {(busca ||
            resultados.length > 0 ||
            resultadosServicos.length > 0) && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className={styles.botaoVoltar}
                style={{ marginTop: 16, marginBottom: 8 }}
                onClick={handleHome}
              >
                Voltar para o início
              </button>
            </div>
          )}
          {/* Resultados da busca */}
          {(resultados.length > 0 || resultadosServicos.length > 0) && (
            <>
              {resultados.length > 0 && (
                <>
                  <h3>Eventos</h3>
                  <div className={styles.lista}>
                    {resultados.map((evento) => (
                      <EventoCard key={evento.id} evento={evento} />
                    ))}
                  </div>
                </>
              )}
              {resultadosServicos.length > 0 && (
                <>
                  <h3>Serviços</h3>
                  <div className={styles.lista}>
                    {resultadosServicos.map((servico) => (
                      <ServicoCard key={servico.id} servico={servico} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          {buscou &&
            resultados.length === 0 &&
            resultadosServicos.length === 0 && (
              <p style={{ marginTop: 10 }}>
                Nenhum evento ou serviço encontrado.
              </p>
            )}
        </section>
      </div>

      {/* 3 - Eventos em destaque */}
      {resultados.length === 0 && resultadosServicos.length === 0 && !busca && (
        <div>
          <section className={styles.secaoEventos}>
            <h2>Eventos em Destaque</h2>
            <div className={styles.lista}>
              {eventosDestaque.slice(0, 2).map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* 4 - Próximos eventos */}
      {resultados.length === 0 && resultadosServicos.length === 0 && !busca && (
        <div>
          <section className={styles.secaoEventos}>
            <h2>Próximos Eventos</h2>
            <div className={styles.lista}>
              {eventosFuturos.map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
