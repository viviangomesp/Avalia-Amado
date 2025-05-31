import styles from './CriarAvaliacao.module.css';
import React, { useEffect, useState } from 'react';
import CriarAvaliacaoForm from '../CriarAvaliacao/CriarAvaliacaoForm';

function CriarAvaliacao() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.criaravaliacao_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Avaliar Evento!</h1>
            <CriarAvaliacaoForm botaoText = 'Enviar Avaliação' onSubmit={(data) => console.log(data)} />
        </div>
        
    )
}
export default CriarAvaliacao;