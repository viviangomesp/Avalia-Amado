import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import logo from '../../img/Titulo_Avalia.png';

function NavBar (){
    return(
        <nav className = {styles.navbar}> 
            <div>
                <Link to ="/" className={styles.logo_conte}>
                    <img src={logo} alt="Avalia Amado" className={styles.logo}/>
                </Link>
            </div>
                <ul className={styles.list}>
                    <li className = {styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/MeuPerfil" >Meu Perfil</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/AgendaEventos" >Agenda de Eventos</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/MinhasAvaliacoes">Minhas Avaliações</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/SobreNos">Sobre Nós</Link>
                    </li>
                    <li className = {styles.item}></li>
                </ul>  
        </nav>
    )
}

export default NavBar;