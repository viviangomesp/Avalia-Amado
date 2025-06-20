import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../img/Titulo_Avalia.png";

function NavBar() {
    // Estado para controlar se o usuário está logado 
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("usuarioId"));
    // Estado para controlar a função do usuário
    const [role, setRole] = useState(localStorage.getItem("role"));
    const navigate = useNavigate();

    // Garante a atualização do 'storage'
    useEffect(() => {
        const onStorage = () => {
            setIsLoggedIn(!!localStorage.getItem("usuarioId"));
            setRole(localStorage.getItem("role"));
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    // Garante a atualização do 'storage' ao carregar a NavBar
    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("usuarioId"));
        setRole(localStorage.getItem("role"));
    }, []);

    // Função para lidar com o logout
    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
        localStorage.removeItem("usuarioId");
        setIsLoggedIn(false);
        setRole(null);// Limpa o role
        navigate("/");
        window.location.reload(); // Força o reload da página
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
                    <>
                        <li className={styles.item}>
                            <Link to="/CadastroEvento">CADASTRAR EVENTO</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/CadastrarServico">CADASTRAR SERVIÇO</Link>
                        </li>
                    </>
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
                {isLoggedIn && ( // Verifica se o usuário está logado
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