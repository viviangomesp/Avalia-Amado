import styles from './SubmitBotao.module.css';

// Componente de botão de envio para formulários
function SubmitBotao({ text, className }) {
    return (
        <div className={styles.botao_div}>
            <button className={`${styles.botao} ${className ? className : ''}`}>{text}</button> {/* botão de envio com texto e classe opcional */}
        </div>
    );
}

export default SubmitBotao;