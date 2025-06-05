import styles from './CadastrarServico.module.css';
import { useEffect, useState } from 'react';
import CadastrarServicoForm from '../CadastrarServico/CadastrarServicoForm';

// Componente para cadastrar um novo serviço
function CadastrarServico() {

    // Estado para controlar a animação de fade-in
    const [fadeIn, setFadeIn] = useState(false);

    // Efeito para aplicar a animação de fade-in quando o componente é montado
    useEffect(() => {

        setFadeIn(true);
        
    }, []);
    return (
        <div className={`${styles.cadServico_container} ${fadeIn ? styles.fadeIn : ''}`}> 
            <h1>Cadastrar Serviço!</h1>
            <CadastrarServicoForm botaoText="Salvar" /> {/* Formulário para cadastrar um novo serviço */}
        </div>
    );
}

export default CadastrarServico;

