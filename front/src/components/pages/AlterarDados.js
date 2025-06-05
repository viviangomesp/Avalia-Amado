import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../form/Input";
import styles from "./AlterarDados.module.css"; 
import SubmitBotao from "../form/SubmitBotao";

// Pagina para alterar os dados do usuário
function AlterarDados() {
  const [fadeIn, setFadeIn] = useState(false); // Estado inicial para controle de animação de fade-in
  const [nome, setNome] = useState(""); // Estado para armazenar o nome do usuário
  const [email, setEmail] = useState(""); // Estado para armazenar o email do usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha do usuário
  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Efeito para aplicar a animação de fade-in e carregar os dados do usuário
  useEffect(() => {
    setFadeIn(true);
    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    setNome(usuario.nome || "");
    setEmail(usuario.email || "");
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const usuarioId = localStorage.getItem("usuarioId"); // Obtém o ID do usuário do localStorage
    try { 
      const response = await fetch( // Envia os dados do usuário para o servidor
        `http://localhost:8080/usuarios/editarUsuario/${usuarioId}`, // Faz a requisição para editar os dados do usuário
        {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, senha }),
        }
      );
      // Verifica se a resposta da requisição foi bem-sucedida
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
  // Renderiza o componente AlterarDados
  return (
    <div className={styles.container}>	
    <div className={`${styles.novoPerfil_container} ${fadeIn ? styles.fadeIn : ""}`}>
      <h1>Alterar Dados do Cadastro</h1>
      <form onSubmit={handleSubmit}> {/* Formulário para alterar os dados do usuário */}
        <Input
          type="text"
          text="Nome"
          name="nome"
          placeholder="Digite seu nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)} /* Atualiza o estado do nome */
        />
        <Input
          type="email"
          text="Email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} /* Atualiza o estado do email */
        />
        <Input
          type="password"
          text="Senha"
          name="senha"
          placeholder="Digite sua nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} /* Atualiza o estado da senha */
        />
        <SubmitBotao text="Alterar Dados" />
      </form>
    </div>
    </div>
  );
}

export default AlterarDados;