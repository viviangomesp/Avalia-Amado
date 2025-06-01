import React, { useState } from 'react';
import Input from '../form/Input'
import SubmitBotao from '../form/SubmitBotao';
import styles from './CadastroForm.module.css'
import { useNavigate } from 'react-router-dom';

function CadastroForm({botaoText}) {
    const navigate = useNavigate(); 
    const [form, setForm] = useState({
        nome: '',
        email: '',
        confirma_email: '',
        senha: '',
        confirma_senha: ''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Validação simples
        if (form.email !== form.confirma_email) {
            alert('Os e-mails não coincidem!');
            return;
        }
        if (form.senha !== form.confirma_senha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Envio para o backend
        try {
            const response = await fetch('http://localhost:8080/usuarios/novoUsuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: form.nome,
                    email: form.email,
                    senha: form.senha
                })
            });

            if (response.ok) {
                const usuario = await response.json();
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('usuarioId', usuario.id);
                alert('Cadastro realizado com sucesso!');
                navigate('/');
                setForm({
                    nome: '',
                    email: '',
                    confirma_email: '',
                    senha: '',
                    confirma_senha: ''
                });
                window.location.reload(); // força o reload da página
            } else {
                const error = await response.text();
                alert('Erro ao cadastrar: ' + error);
            }
        } catch (err) {
            alert('Erro de conexão com o servidor!');
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                type="text" 
                text="Nome do Usuário" 
                name="nome" 
                placeholder="Insira seu nome"
                value={form.nome}
                onChange={handleChange}
            />
            <Input 
                type="email" 
                text="Email do Usuário" 
                name="email" 
                placeholder="Insira seu email"
                value={form.email}
                onChange={handleChange}
            />
            <Input 
                type="email" 
                text="Confirme seu Email" 
                name="confirma_email" 
                placeholder="Confirme seu email"
                value={form.confirma_email}
                onChange={handleChange}
            />
            <Input 
                type="password" 
                text="Senha" 
                name="senha" 
                placeholder="Digite sua senha"
                value={form.senha}
                onChange={handleChange}
            />
            <Input 
                type="password" 
                text="Confirme sua Senha" 
                name="confirma_senha" 
                placeholder="Confirme sua senha"
                value={form.confirma_senha}
                onChange={handleChange}
            />
            <p className={styles.senha_info}>
                A senha deve conter de<br/> 8 a 20 caracteres<br/>Pelo menos um número e uma letra.
            </p>
            <SubmitBotao text={botaoText}/>
        </form>
    )
}
export default CadastroForm;