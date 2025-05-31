import styles from './InputEventos.module.css';

function InputEventos({ onChange, values }) {
    return (
        <div className={styles.container}>
            <div className={`${styles.input_group} ${styles.nome_evento_group}`}>
                <label htmlFor="nome_evento">Nome do Evento</label>
                <input
                    type="text"
                    id="nome_evento"
                    name="nome_evento"
                    value={values.nome_evento || ''}
                    onChange={onChange}
                    placeholder="Digite o nome do evento"
                />
            </div>
            <div className = {styles.junto}>
                <div className={`${styles.input_group} ${styles.data_group}`}>
                    <label htmlFor="data">Data</label>
                    <input
                        type="date"
                        id="data"
                        name="data"
                        value={values.data || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${styles.input_group} ${styles.hora_group}`}>
                    <label htmlFor="hora">Hora</label>
                    <input
                        type="time"
                        id="hora"
                        name="hora"
                        value={values.hora || ''}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className={`${styles.input_group} ${styles.descricao_group}`}>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    id="descricao"
                    name="descricao"
                    value={values.descricao || ''}
                    onChange={onChange}
                    placeholder="Descreva o evento"
                />
            </div>
        </div>
    );
}

export default InputEventos;