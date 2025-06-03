import styles from './CadastrarServico.module.css';
import React, { useEffect, useState } from 'react';
import CadastrarServicoForm from '../CadastrarServico/CadastrarServicoForm';

function CadastrarServico() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {

        setFadeIn(true);
        
    }, []);

    return (
        <div className={`${styles.cadServico_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Cadastrar Serviço!</h1>
            <CadastrarServicoForm botaoText="Salvar" />
        </div>
    );
}

export default CadastrarServico;

