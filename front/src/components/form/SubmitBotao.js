import styles from './SubmitBotao.module.css';

function SubmitBotao({ text, className }) {
    return (
        <div className={styles.botao_div}>
            <button className={`${styles.botao} ${className ? className : ''}`}>{text}</button>
        </div>
    );
}

export default SubmitBotao;