import styles from './OnclickBotao.module.css';

// Componente de botão reutilizável
function OnclickBotao({ text, className, ...props }) {
    return (
        <div>
            <button
                className={`${styles.botao} ${className ? className : ''}`}
                {...props}
            >
                {text}
            </button>
        </div>
    );
}

export default OnclickBotao;