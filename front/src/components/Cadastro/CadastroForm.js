import Input from '../form/Input'
import SubmitBotao from '../form/SubmitBotao';
import styles from './CadastroForm.module.css'

function CadastroForm({botaoText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Usuário" 
                name="nome" 
                placeholder="Insira seu nome"
            />
            <Input 
                type="email" 
                text="Email do Usuário" 
                name="email" 
                placeholder="Insira seu email"
            />
            <Input 
                type="email" 
                text="Confirme seu Email" 
                name="confirma_email" 
                placeholder="Confirme seu email"
            />
            <Input 
                type="password" 
                text="Senha" 
                name="senha" 
                placeholder="Digite sua senha"
            />
            <Input 
                type="password" 
                text="Confirme sua Senha" 
                name="confirma_senha" 
                placeholder="Confirme sua senha"
            />
            <p className={styles.senha_info}>
                A senha deve conter de<br/> 8 a 20 caracteres<br/>Pelo menos um número e uma letra.
            </p>
            <SubmitBotao text = {botaoText}/>
        </form>
    )
}
export default CadastroForm;