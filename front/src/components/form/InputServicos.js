import styles from "./InputServicos.module.css";

// componente de entrada de formulário para serviços
function InputServicos({ onChange, values }) {
  return (
    <div className={styles.form_control}>
      <div className={styles.input_grupo}>
        {/* campo de entrada para o nome do serviço */}
        <label htmlFor="tipo">Tipo do Serviço</label>
        <select // campo de seleção para o tipo de serviço
          id="tipo"
          name="tipo"
          value={values.tipo || ""} // valor inicial do campo
          onChange={onChange} // função para lidar com mudanças
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
      {/* campo de entrada para o nome do serviço */}
      {values.tipo === "SAUDE" && ( // mostra campos adicionais SE o tipo for Saúde
        <div className={styles.input_grupo}>
          <label htmlFor="tipoSaude">Tipo de Serviço de Saúde</label>
          <select
            id="tipoSaude"
            name="tipoSaude"
            value={values.tipoSaude || ""} // valor inicial do campo
            onChange={onChange} // função para lidar com mudanças
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
        {/* campo de entrada para o local do serviço */}
        <input
          type="text"
          id="local"
          name="local"
          value={values.local || ""} // valor inicial do campo
          onChange={onChange} // função para lidar com mudanças
          placeholder="Digite o local do serviço"
        />
      </div>
      <div className={styles.input_grupo}>
        <label htmlFor="descricao">Descrição do Serviço</label>
        {/* campo de entrada para a descrição do serviço */}
        <textarea
          id="descricao"
          name="descricao"
          value={values.descricao || ""} // valor inicial do campo
          onChange={onChange} // função para lidar com mudanças
          placeholder="Descreva o serviço"
        />
      </div>
    </div>
  );
}

export default InputServicos;
