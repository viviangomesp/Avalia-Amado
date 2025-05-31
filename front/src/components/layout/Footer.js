import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div>
                    <p className = {styles.descricao}>
                        Avalia AMADO é uma plataforma desenvolvida para a comunidade LGBTQIA+.<br />
                        Nosso objetivo é garantir a segurança e promover o bem-estar de todos dentro das ações do Núcleo AMADO.<br />
                        Aqui, você pode avaliar suas experiências, fortalecer a comunidade com a sua própria voz e fazer a diferença.<br />
                        Participe do projeto e transforme espaços!
                    </p>
                </div>
                <div>
                    <ul className = {styles.social_list}>
                        <li>
                            <p>Entre em contato conosco: <br/>
                                E-mail: <a 
                                    href="mailto:eqp_amadoavalia@nucleoamado.com"
                                    className = {styles.email_link}>

                                    eqp_amadoavalia@nucleoamado.com
                                </a>
                            </p>
                            <div className = {styles.social_link}>
                                <FaInstagram className = {styles.insta_logo}/>
                                <a  
                                    href="https://www.unijorge.edu.br/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className = {styles.uni_link}
                                >
                                    Site Unijorge
                                </a>
                            </div>
                        </li>
                    </ul>                    
                </div>
            </div>
            <p className={styles.copy_right}>
                <span>Avalia Amado</span> &copy; 2025
            </p>
        </footer>
    )
}

export default Footer;