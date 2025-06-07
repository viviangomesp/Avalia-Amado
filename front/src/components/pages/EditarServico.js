import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputServicos from "../form/InputServicos";
import styles from "./EditarServico.module.css";
import SubmitBotao from "../form/SubmitBotao";

function EditarServico() {
  const [fadeIn, setFadeIn] = useState(false);
  const [values, setValues] = useState({
    tipo: "",
    tipoSaude: "",
    descricao: "",
    local: "",
    dataInicial: "",
    dataFinal: "",
    horaInicial: "",
    horaFinal: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const usuarioId = localStorage.getItem("usuarioId");
  const role = localStorage.getItem("role");

  useEffect(() => {
    setFadeIn(true);
    fetch(`http://localhost:8080/servicos/${id}`)
      .then(res => res.json())
      .then(servico => {
        setValues({
          tipo: servico.tipo || "",
          tipoSaude: servico.tipoSaude || "",
          descricao: servico.descricao || "",
          local: servico.local || "",
          dataInicial: servico.dataInicial || "",
          dataFinal: servico.dataFinal || "",
          horaInicial: servico.horaInicial || "",
          horaFinal: servico.horaFinal || "",
        });
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Monta o payload
    const payload = {
      tipo: values.tipo || null,
      descricao: values.descricao || null,
      local: values.local || null,
      dataInicial: values.dataInicial || null,
      dataFinal: values.dataFinal || null,
      horaInicial: values.horaInicial || null,
      horaFinal: values.horaFinal || null,
      // Só envia tipoSaude se o tipo for SAUDE
      tipoSaude: values.tipo === "SAUDE" ? values.tipoSaude || null : null,
    };
  
    // Remove campos nulos
    Object.keys(payload).forEach(
      (key) => (payload[key] === null || payload[key] === "") && delete payload[key]
    );
  
    try {
      const response = await fetch(
        `http://localhost:8080/servicos/editarServico/${id}?usuarioId=${usuarioId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        alert("Serviço alterado com sucesso!");
        navigate("/");
      } else {
        const erro = await response.json();
        alert(erro.erro || "Erro ao alterar serviço.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  if (role !== "ADMIN") {
    return (
      <div className={styles.container}>
        <div className={styles.novoServico_container}>
          <h2>Você não tem permissão para editar serviços.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.novoServico_container} ${fadeIn ? styles.fadeIn : ""}`}>
        <h1>Editar Serviço</h1>
        <form onSubmit={handleSubmit}>
          <InputServicos onChange={handleChange} values={values} />
          <SubmitBotao text="Alterar Serviço" />
        </form>
      </div>
    </div>
  );
}

export default EditarServico;