import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../img/Titulo_Avalia.png";

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [role, setRole] = useState(localStorage.getItem("role"));
    const navigate = useNavigate();

    // Atualiza o estado quando houver mudança no localStorage (ex: após login/logout)
    useEffect(() => {
        const onStorage = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
            setRole(localStorage.getItem("role"));
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    // Atualiza ao navegar
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        setRole(localStorage.getItem("role"));
    }, []);

    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
        localStorage.removeItem("usuarioId");
        setIsLoggedIn(false);
        setRole(null);
        navigate("/");
        window.location.reload(); // força o reload da página
    }

    return (
        <nav className={styles.navbar}>
            <div>
                <Link to="/" className={styles.logo_conte}>
                    <img src={logo} alt="Avalia Amado" className={styles.logo} />
                </Link>
            </div>
            <ul className={styles.list}>
                {role === "ADMIN" && (
                    <li className={styles.item}>
                        <Link to="/CadastroEvento">CADASTRAR EVENTO</Link>
                    </li>
                )}
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/MeuPerfil">Meu Perfil</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/AgendaEventos">Agenda de Eventos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/MinhasAvaliacoes">Minhas Avaliações</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/SobreNos">Sobre Nós</Link>
                </li>
                {isLoggedIn && (
                    <li className={styles.item}>
                        <button onClick={handleLogout} className={styles.logout}>
                            Sair
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;