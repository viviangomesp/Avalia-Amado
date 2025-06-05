import { useEffect, useState } from 'react';
import CadastroForm from '../Cadastro/CadastroForm';
import styles from './Cadastro.module.css';

// Componente para realizar o cadastro de um novo usuário
function Cadastro() {
    // Estado para controlar a animação de fade-in
    const [fadeIn, setFadeIn] = useState(false);

    // Efeito para aplicar a animação de fade-in quando o componente é montado
    useEffect(() => {
        setFadeIn(true);
        
    }, []);

    return(
        <div className={`${styles.novocadastro_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Realize seu Cadastro!</h1>
            <CadastroForm botaoText=" Cadastrar"/> {/* Formulário para realizar o cadastro de um novo usuário */}
            <p className={styles.ja_cadastrado}>
                <a href="/login">Já possui uma conta? Faça seu Login</a> {/* Link para o login caso o usuário já tenha uma conta */}
            </p>
        </div>
    )
}

export default Cadastro;