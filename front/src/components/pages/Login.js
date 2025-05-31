import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import LoginForm from "../Login/LoginForm";

function Login() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles.container} ${fadeIn ? styles.fadeIn : ""}`}>
      <div className={styles.login}>
        <h1>Faça seu Login!</h1>
        <LoginForm botaoText="Entrar" />
      </div>
    </div>
  );
}
export default Login;