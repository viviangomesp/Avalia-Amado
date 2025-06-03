import React, { useEffect, useState } from 'react'; // Importa React e hooks
import styles from './MeuPerfil.module.css'; // Importa os estilos CSS do perfil
import fotoperfil from '../../img/fotoperfil.png'; // Importa imagem padrão de perfil
import { useNavigate } from 'react-router-dom'; // Importa hook para navegação

function MeuPerfil() {
  // Estado para armazenar dados do usuário
  const [usuario, setUsuario] = useState(null);
  // Estado para armazenar avaliações do usuário
  const [avaliacoes, setAvaliacoes] = useState([]);
  // Hook para navegação programática
  const navigate = useNavigate();

  // Efeito para buscar dados do usuário e avaliações ao montar o componente
  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId'); // Busca o ID do usuário logado
    if (!usuarioId) {
      navigate('/cadastro'); // Redireciona para cadastro/login se não estiver logado
      return;
    }

    // Busca os dados do usuário na API
    fetch(`http://localhost:8080/usuarios/${usuarioId}`)
      .then(res => res.json())
      .then(setUsuario);

    // Busca as avaliações feitas pelo usuário na API
    fetch(`http://localhost:8080/avaliacoes/usuario/${usuarioId}`)
      .then(res => res.json())
      .then(setAvaliacoes);
  }, [navigate]);

  // Exibe mensagem de carregamento enquanto os dados não chegam
  if (!usuario) return <p>Carregando...</p>;

  // Renderiza o perfil do usuário e suas avaliações recentes
  return (
    <div className={styles.perfilContainer}>
      {/* Seção central com foto, nome e email */}
      <div className={styles.infoCentral}>
        <img
          src={fotoperfil} alt="foto do usuário" 
          className={styles.avatar}
        />
        <h2>{usuario.nome}</h2>
        <p>{usuario.email}</p>
      </div>

      {/* Seção de avaliações recentes */}
      <div className={styles.secaoEsquerda}>
        <h3 className={styles.avaliacoesTitulo}>Avaliações Recentes</h3>
        <div className={styles.listaEventos}>
          {avaliacoes.map(av => (
            <div key={av.id} className={styles.avaliacaoCard}>
              <h4>{av.evento?.nome || 'Evento'}</h4>
              <p>{av.comentario}</p>
              <p>Nota: {av.nota}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeuPerfil;