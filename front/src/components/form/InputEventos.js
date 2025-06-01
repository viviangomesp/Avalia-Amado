import styles from './InputEventos.module.css';

function InputEventos({ onChange, values }) {
    return (
        <div>
            <div className={styles.input_grupo}>
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
                <div className={styles.input_grupo}>
                    <label htmlFor="data">Data Inicial</label>
                    <input
                        type="date"
                        id="dataInicial"
                        name="dataInicial"
                        value={values.dataInicial || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="dataFinal">Data Final</label>
                    <input
                        type="date"
                        id="dataFinal"
                        name="dataFinal"
                        value={values.dataFinal || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="hora">Hora Inicial</label>
                    <input
                        type="time"
                        id="horaInicial"
                        name="horaInicial"
                        value={values.horaInicial || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="horaFinal">Hora Final</label>
                    <input
                        type="time"
                        id="horaFinal"
                        name="horaFinal"
                        value={values.horaFinal || ''}
                        onChange={onChange}
                    />
                </div> 
                <div className={styles.input_grupo}>
                    <label htmlFor="local">Local</label>
                    <input
                        type="text"
                        id="local"
                        name="local"
                        value={values.local || ''}
                        onChange={onChange}
                        placeholder="Local do evento"
                    />
                </div> 
            </div>
            <div className={styles.descricao_group}>
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