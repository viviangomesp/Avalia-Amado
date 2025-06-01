import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    // Atualiza pagina para garantir que as alterações serão aderidas(após login)
    useEffect(() => {
        const onStorage = () => setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    // atualiza ao voltar para a Home
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, []);

    return (
        <ul className={styles.container}>
            <li className={styles.avaliacoao}>
                <Link to="/CriarAvaliacao">
                    Criar Avaliação
                </Link>
            </li>
            {!isLoggedIn && (
                <li>
                    <Link to="/Cadastro" className={styles.cadastro}>
                        Login/Cadastro
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default Home;