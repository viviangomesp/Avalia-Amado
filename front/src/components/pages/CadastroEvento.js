import styles from './CadastroEvento.module.css';
import React, { useEffect, useState } from 'react';
import CadastroEventoForm from '../CadastroEvento/CadastroEventoForm';
function CadastroEvento() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.cadEvento_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Cadastrar Evento!</h1>
            <CadastroEventoForm botaoText = "Salvar"/>
        </div>
    );
}
export default CadastroEvento;