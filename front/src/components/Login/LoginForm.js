import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';
import SubmitBotao from '../form/SubmitBotao';
import styles from './LoginForm.module.css';

// Componente de formulário de login
function LoginForm({ botaoText }) {
    const [form, setForm] = useState({ email: '', senha: '' }); // Estado para armazenar os dados do formulário
    const navigate = useNavigate(); // Hook para navegação entre páginas

    // Função para lidar com as mudanças nos campos do formulário
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault(); // impede de ficar recarregando a página
        try {
            const response = await fetch('http://localhost:8080/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                const usuario = await response.json();
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('role', usuario.role); 
                localStorage.setItem('usuarioId', usuario.id);     
                alert('Login realizado com sucesso!');
                navigate('/');
                window.location.reload(); // força o reload da página
            } else {
                alert('Email ou senha inválidos!');
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor!');
        }
    }

    return (
        // Formulário de login
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                type="email"
                text="Email do Usuário"
                name="email"
                placeholder="Insira seu email"
                value={form.email}
                onChange={handleChange} // função para lidar com mudanças
            />
            <Input
                type="password"
                text="Senha"
                name="senha"
                placeholder="Digite sua senha"
                value={form.senha}
                onChange={handleChange} // função para lidar com mudanças
            />
            <SubmitBotao text={botaoText} />
        </form>
    );
}

export default LoginForm;