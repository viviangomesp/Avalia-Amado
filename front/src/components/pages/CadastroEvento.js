import styles from './CadastroEvento.module.css';
import { useEffect, useState } from 'react';
import CadastroEventoForm from '../CadastroEvento/CadastroEventoForm';

function CadastroEvento() {
    // Estado para controlar a animação de fade-in
    const [fadeIn, setFadeIn] = useState(false);
    // Efeito para aplicar a animação de fade-in quando o componente é montado
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.cadEvento_container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Cadastrar Evento!</h1>
            <CadastroEventoForm botaoText = "Salvar"/> {/* Formulário para cadastrar um novo evento */}
        </div>
    );
}
export default CadastroEvento;