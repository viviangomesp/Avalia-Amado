import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../form/Input";
import styles from "./AlterarDados.module.css"; 
import SubmitBotao from "../form/SubmitBotao";

function AlterarDados() {
  const [fadeIn, setFadeIn] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    setNome(usuario.nome || "");
    setEmail(usuario.email || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuarioId = localStorage.getItem("usuarioId");
    try {
      const response = await fetch(
        `http://localhost:8080/usuarios/editarUsuario/${usuarioId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, senha }),
        }
      );
      if (response.ok) {
        alert("Dados alterados com sucesso!");
        localStorage.setItem("usuario", JSON.stringify({ nome, email }));
        navigate("/MeuPerfil");
      } else {
        alert("Erro ao alterar dados.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className={styles.container}>	
    <div className={`${styles.novoPerfil_container} ${fadeIn ? styles.fadeIn : ""}`}>
      <h1>Alterar Dados do Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Nome"
          name="nome"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="email"
          text="Email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          text="Senha"
          name="senha"
          placeholder="Digite sua nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <SubmitBotao text="Alterar Dados" />
      </form>
    </div>
    </div>
  );
}

export default AlterarDados;