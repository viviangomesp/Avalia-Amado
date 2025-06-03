import React, { useEffect, useState } from 'react';
import CadastroForm from '../Cadastro/CadastroForm';
import styles from './Cadastro.module.css';

function Cadastro() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
        
    }, []);

    return(
        <div className={`${styles.novocadastro_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Realize seu Cadastro!</h1>
            <CadastroForm botaoText=" Cadastrar"/>
            <p className={styles.ja_cadastrado}>
                <a href="/login">Já possui uma conta? Faça seu Login</a>
            </p>
        </div>
    )
}

export default Cadastro;