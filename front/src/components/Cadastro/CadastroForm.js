import React, { useState } from 'react';
import Input from '../form/Input'
import SubmitBotao from '../form/SubmitBotao';
import styles from './CadastroForm.module.css'
import { useNavigate } from 'react-router-dom';

// Componente para cadastro de usuário
function CadastroForm({botaoText}) {
    const navigate = useNavigate(); // Hook para navegação entre páginas

    // Estado para armazenar os valores do formulário
    const [form, setForm] = useState({
        nome: '',
        email: '',
        confirma_email: '',
        senha: '',
        confirma_senha: ''
    });

    // Função para lidar com as mudanças nos campos do formulário
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // Função para lidar com o envio do formulário
    async function handleSubmit(e) {
        e.preventDefault();

        // Validação simples
        if (form.email !== form.confirma_email) {
            alert('Os e-mails não coincidem!');
            return;
        }
        // Verifica se a senha atende aos critérios
        if (form.senha !== form.confirma_senha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            // Monta o payload com os dados do usuário e faz a requisição para o servidor
            const response = await fetch('http://localhost:8080/usuarios/novoUsuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: form.nome,
                    email: form.email,
                    senha: form.senha
                })
            });

            // Verifica se a resposta foi bem sucedida
            if (response.ok) {
                const usuario = await response.json();
                localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado
                localStorage.setItem('usuarioId', usuario.id); // Armazena o ID do usuário no localStorage
                alert('Cadastro realizado com sucesso!');
                navigate('/');
                setForm({
                    nome: '', // Reseta os campos do formulário
                    email: '', // Reseta os campos do formulário
                    confirma_email: '', // Reseta os campos do formulário
                    senha: '', // Reseta os campos do formulário
                    confirma_senha: '' // Reseta os campos do formulário
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
        // Renderiza o formulário de cadastro
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                type="text" 
                text="Nome do Usuário" 
                name="nome" 
                placeholder="Insira seu nome"
                value={form.nome} // Campo para o nome do usuário
                onChange={handleChange} // Atualiza o estado do nome
            />
            <Input 
                type="email" 
                text="Email do Usuário" 
                name="email" 
                placeholder="Insira seu email"
                value={form.email} // Campo para o email do usuário
                onChange={handleChange} // Atualiza o estado do email
            />
            <Input 
                type="email" 
                text="Confirme seu Email" 
                name="confirma_email" 
                placeholder="Confirme seu email"
                value={form.confirma_email} // Campo para confirmar o email do usuário
                onChange={handleChange} // Atualiza o estado do email de confirmação
            />
            <Input 
                type="password" 
                text="Senha" 
                name="senha" 
                placeholder="Digite sua senha"
                value={form.senha} // Campo para a senha do usuário
                onChange={handleChange} // Atualiza o estado da senha
            />
            <Input 
                type="password" 
                text="Confirme sua Senha" 
                name="confirma_senha" 
                placeholder="Confirme sua senha"
                value={form.confirma_senha} // Campo para confirmar a senha do usuário
                onChange={handleChange} // Atualiza o estado da senha de confirmação
            />
            <p className={styles.senha_info}>
                A senha deve conter de<br/> 8 a 20 caracteres<br/>Pelo menos um número e uma letra.
            </p>
            <SubmitBotao text={botaoText}/>
        </form>
    )
}
export default CadastroForm;