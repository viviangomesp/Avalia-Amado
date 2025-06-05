import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import LoginForm from "../Login/LoginForm";

function Login() {
  // Estado para controlar a animação de fade-in
  const [fadeIn, setFadeIn] = useState(false);
  // Efeito para aplicar a animação de fade-in quando o componente é montado
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles.container} ${fadeIn ? styles.fadeIn : ""}`}>
      <div className={styles.login}>
        <h1>Faça seu Login!</h1>
        <LoginForm botaoText="Entrar" /> {/* Formulário para realizar o login do usuário */}
      </div>
    </div>
  );
}
export default Login;