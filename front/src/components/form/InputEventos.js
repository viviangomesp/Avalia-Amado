import styles from './InputEventos.module.css';

// Componente de entrada de formulário para eventos
function InputEventos({ onChange, values }) {
    return (
        <div>
            <div className={styles.input_grupo}>
                <label htmlFor="nome_evento">Nome do Evento</label>
                <input // campo de entrada para o nome do evento
                    type="text"
                    id="nome_evento"
                    name="nome_evento"
                    value={values.nome_evento || ''} // valor inicial do campo
                    onChange={onChange} // função para lidar com mudanças
                    placeholder="Digite o nome do evento"
                />
            </div>
            <div className = {styles.junto}>
                <div className={styles.input_grupo}>
                    <label htmlFor="data">Data Inicial</label>
                    <input // campo de entrada para a data inicial do evento
                        type="date"
                        id="dataInicial"
                        name="dataInicial"
                        value={values.dataInicial || ''} // valor inicial do campo
                        onChange={onChange} // função para lidar com mudanças
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="dataFinal">Data Final</label>
                    <input // campo de entrada para a data final do evento
                        type="date"
                        id="dataFinal"
                        name="dataFinal"
                        value={values.dataFinal || ''} // valor inicial do campo
                        onChange={onChange} // função para lidar com mudanças
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="hora">Hora Inicial</label>
                    <input // campo de entrada para a hora inicial do evento
                        type="time"
                        id="horaInicial"
                        name="horaInicial"
                        value={values.horaInicial || ''} // valor inicial do campo
                        onChange={onChange} // função para lidar com mudanças
                    />
                </div>
                <div className={styles.input_grupo}>
                    <label htmlFor="horaFinal">Hora Final</label>
                    <input // campo de entrada para a hora final do evento
                        type="time"
                        id="horaFinal"
                        name="horaFinal"
                        value={values.horaFinal || ''} // valor inicial do campo
                        onChange={onChange} // função para lidar com mudanças
                    />
                </div> 
                <div className={styles.input_grupo}>
                    <label htmlFor="local">Local</label>
                    <input // campo de entrada para o local do evento
                        type="text"
                        id="local"
                        name="local"
                        value={values.local || ''} // valor inicial do campo
                        onChange={onChange} // função para lidar com mudanças
                        placeholder="Local do evento"
                    />
                </div> 
            </div>
            <div className={styles.descricao_group}>
                <label htmlFor="descricao">Descrição</label>
                <textarea // campo de entrada para a descrição do evento
                    id="descricao"
                    name="descricao"
                    value={values.descricao || ''} // valor inicial do campo
                    onChange={onChange} // função para lidar com mudanças
                    placeholder="Descreva o evento"
                />
            </div>
        </div>
    );
}

export default InputEventos;