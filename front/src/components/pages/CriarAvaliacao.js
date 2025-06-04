import styles from './CriarAvaliacao.module.css';
import React, { useEffect, useState } from 'react';
import CriarAvaliacaoForm from '../CriarAvaliacao/CriarAvaliacaoForm';
import { useParams } from 'react-router-dom';

function CriarAvaliacao() {
    const usuarioId = localStorage.getItem('usuarioId');
    const { eventoId, servicoId } = useParams(); 
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.criaravaliacao_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Avaliar Evento!</h1>
            <CriarAvaliacaoForm 
            usuarioId={usuarioId}
            servicoId={servicoId}
            eventoId={eventoId}
            botaoText = 'Enviar Avaliação' onSubmit={(data) => console.log(data)} />
        </div>
        
    )
}
export default CriarAvaliacao;