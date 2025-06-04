import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../form/Input";
import styles from "./AlterarDados.module.css";
import SubmitBotao from "../form/SubmitBotao";

function EditarServico() {
  const [fadeIn, setFadeIn] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const usuarioId = localStorage.getItem("usuarioId");
  const role = localStorage.getItem("role");

  useEffect(() => {
    setFadeIn(true);
    fetch(`http://localhost:8080/servicos/${id}`)
      .then(res => res.json())
      .then(servico => {
        setNome(servico.nome || "");
        setDescricao(servico.descricao || "");
        setLocal(servico.local || "");
        setTipo(servico.tipo || "");
        setImagem(servico.imagem || servico.urlImagem || "");
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/servicos/editarServico/${id}?usuarioId=${usuarioId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, descricao, local, tipo, imagem }),
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

  if (role !== "ADMIN") {
    return (
      <div className={styles.container}>
        <div className={styles.novoPerfil_container}>
          <h2>Você não tem permissão para editar serviços.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.novoPerfil_container} ${fadeIn ? styles.fadeIn : ""}`}>
        <h1>Editar Serviço</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Digite o nome do serviço"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            text="Descrição"
            name="descricao"
            placeholder="Digite a descrição do serviço"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input
            type="text"
            text="Local"
            name="local"
            placeholder="Digite o local do serviço"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          <Input
            type="text"
            text="Tipo"
            name="tipo"
            placeholder="Digite o tipo do serviço"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <Input
            type="text"
            text="URL da Imagem"
            name="imagem"
            placeholder="URL da imagem do serviço"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <SubmitBotao text="Alterar Serviço" />
        </form>
      </div>
    </div>
  );
}

export default EditarServico;