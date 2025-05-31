import { Link } from 'react-router-dom';
import styles from './Home.module.css';
  

function Home() {
    return (
        <ul className={styles.container}>
            <li className={styles.cadastroEvento}>
                <Link to="/CadastroEvento">
                    Cadastrar Evento
                </Link>
            </li>
            <li className={styles.avaliacoao}>
                <Link to="/CriarAvaliacao">
                    Criar Avaliação
                </Link>
            </li>
            <li>
                <Link to="/Cadastro" className={styles.cadastro}>
                    Login/Cadastro
                </Link>
            </li>
        </ul>
    )
}

export default Home;