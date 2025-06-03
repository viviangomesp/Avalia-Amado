import styles from "./InputServicos.module.css";

function InputServicos({ onChange, values }) {
  return (
    <div className={styles.form_control}>
      <div className={styles.input_grupo}>
        <label htmlFor="tipo">Tipo do Serviço</label>
        <select
          id="tipo"
          name="tipo"
          value={values.tipo || ""}
          onChange={onChange}
        >
          <option value="">Selecione o tipo</option>
          <option value="JURIDICO">Jurídico</option>
          <option value="CONTABILIDADE">Contabilidade</option>
          <option value="EDUCACAO">Educação</option>
          <option value="RELACOES_INTERNACIONAIS">
            Relações Internacionais
          </option>
          <option value="COMUNICACAO">Comunicação</option>
          <option value="SAUDE">Saúde</option>
        </select>
      </div>
      {values.tipo === "SAUDE" && (
        <div className={styles.input_grupo}>
          <label htmlFor="tipoSaude">Tipo de Serviço de Saúde</label>
          <select
            id="tipoSaude"
            name="tipoSaude"
            value={values.tipoSaude || ""}
            onChange={onChange}
          >
            <option value="">Selecione o tipo de serviço de saúde</option>
            <option value="PSICOLOGIA">Psicologia</option>
            <option value="FONOAUDIOLOGIA">Fonoaudiologia</option>
            <option value="NUTRICAO">Nutrição</option>
            <option value="FISIOTERAPIA">Fisioterapia</option>
          </select>
        </div>
      )}
      <div className={styles.input_grupo}>
        <label htmlFor="local">Local</label>
        <input
          type="text"
          id="local"
          name="local"
          value={values.local || ""}
          onChange={onChange}
          placeholder="Digite o local do serviço"
        />
      </div>
      <div className={styles.data_juntas}>
        <div className={styles.input_grupo}>
          <label html="dataInicial">Data Inicial</label>
          <input
            type="date"
            id="dataInicial"
            name="dataInicial"
            value={values.dataInicial || ""}
            onChange={onChange}
            placeholder="Selecione a data inicial"
          />
        </div>
        <div className={styles.input_grupo}>
          <label htmlFor="dataFinal">Data Final</label>
          <input
            type="date"
            id="dataFinal"
            name="dataFinal"
            value={values.dataFinal || ""}
            onChange={onChange}
            placeholder="Selecione a data final"
          />
        </div>
      </div>
      <div className={styles.hora_juntas}>
        <div className={styles.input_grupo}>
          <label htmlFor="horaInicial">Hora Inicial</label>
          <input
            type="time"
            id="horaInicial"
            name="horaInicial"
            value={values.horaInicial || ""}
            onChange={onChange}
            placeholder="Selecione a hora inicial"
          />
        </div>
        <div className={styles.input_grupo}>
          <label htmlFor="horaFinal">Hora Final</label>
          <input
            type="time"
            id="horaFinal"
            name="horaFinal"
            value={values.horaFinal || ""}
            onChange={onChange}
            placeholder="Selecione a hora final"
          />
        </div>
      </div>
      <div className={styles.input_grupo}>
        <label htmlFor="descricao">Descrição do Serviço</label>
        <textarea
          id="descricao"
          name="descricao"
          value={values.descricao || ""}
          onChange={onChange}
          placeholder="Descreva o serviço"
        />
      </div>
    </div>
  );
}

export default InputServicos;
