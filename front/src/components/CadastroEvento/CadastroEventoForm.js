import { useState } from 'react';
import SubmitBotao from '../form/SubmitBotao';
import InputEventos from '../form/InputEventos';
import styles from './CadastroEventoForm.module.css';
import { useNavigate } from 'react-router-dom';

// Componente para cadastro de eventos
function CadastroEventoForm({ botaoText }) {
    const tipoUsuario = localStorage.getItem('role'); // Obtém o tipo de usuário do localStorage
    const navigate = useNavigate(); // Hook para navegação entre páginas

    // Estado para armazenar os valores do formulário
    const [values, setValues] = useState({
        nome_evento: '',
        dataInicial: '',
        dataFinal: '',
        horaInicial: '',
        horaFinal: '',
        local: '',
        descricao: ''

    });
    // Verifica se o usuário é um administrador
    if (tipoUsuario !== 'ADMIN') {
        return <p>Você não tem permissão para cadastrar eventos.</p>;
    }

    // Função para lidar com as mudanças nos campos do formulário
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    // Função para lidar com o envio do formulário
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            //monta o payload com os dados do evento
            const usuarioId = localStorage.getItem('usuarioId');
            const eventoPayload = {
                nome: values.nome_evento, 
                dataInicial: values.dataInicial,
                dataFinal: values.dataFinal,
                horaInicial: values.horaInicial,
                horaFinal: values.horaFinal,
                local: values.local,
                descricao: values.descricao
            };
            //requisição para o servidor
            const response = await fetch(`http://localhost:8080/eventos/novoEvento?usuarioId=${usuarioId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventoPayload)
            });
            //verifica se a resposta foi bem sucedida
            if (response.ok) {
                alert('Evento cadastrado com sucesso!');
                navigate('/');
            } else {
                alert('Erro ao cadastrar evento: Verifique os dados.');
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor!');
        }
    }

    return (
        <form className={styles.input_group} onSubmit={handleSubmit}>
            <InputEventos onChange={handleChange} values={values} />
            <SubmitBotao text={botaoText} className={styles.btnSalvar} />
        </form>
    );
}

export default CadastroEventoForm;