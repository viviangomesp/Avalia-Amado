import Input from '../form/Input';
import SubmitBotao from '../form/SubmitBotao';
import styles from './LoginForm.module.css';

function LoginForm({ botaoText }) {
    return (
        <form className={styles.form}> 
            <Input 
                type="email" 
                text="Email do Usuário" 
                name="email" 
                placeholder="Insira seu email"
            />
            <Input 
                type="password" 
                text="Senha" 
                name="senha" 
                placeholder="Digite sua senha"
            />
            <SubmitBotao text = {botaoText}/>
        </form>
    )
}

export default LoginForm;