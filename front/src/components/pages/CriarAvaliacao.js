import styles from './CriarAvaliacao.module.css';
import { useEffect, useState } from 'react';
import CriarAvaliacaoForm from '../CriarAvaliacao/CriarAvaliacaoForm';
import { useParams } from 'react-router-dom';

// Componente para criar avaliações de serviços ou eventos
function CriarAvaliacao() {
    const usuarioId = localStorage.getItem('usuarioId'); // Obtém o ID do usuário do localStorage
    const { eventoId, servicoId } = useParams(); // Obtém os IDs de evento e serviço dos parâmetros da rota
    const [fadeIn, setFadeIn] = useState(false); // Estado para controlar a animação de fade-in

    // Efeito para aplicar a animação de fade-in quando o componente é montado
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.criaravaliacao_container} ${fadeIn ? styles.fadeIn : ''}`}>
            {/* Título do formulário dinâmico */}
            <h1>{servicoId ? "Avaliar Serviço!" : "Avaliar Evento!"}</h1> 
            <CriarAvaliacaoForm 
            usuarioId={usuarioId} // Passa o ID do usuário para o formulário
            servicoId={servicoId} // Passa o ID do serviço, se existir
            eventoId={eventoId} // Passa o ID do evento, se existir
            botaoText = 'Enviar Avaliação' onSubmit={(data) => console.log(data)} /> 
        </div>
        
    )
}
export default CriarAvaliacao;