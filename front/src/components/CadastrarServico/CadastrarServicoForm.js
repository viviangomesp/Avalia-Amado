import styles from "./CadastrarServicoForm.module.css";
import SubmitBotao from '../form/SubmitBotao';
import InputServicos from '../form/InputServicos';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastrarServicoForm({ botaoText }) {
    const tipoUsuario = localStorage.getItem('role');
    const navigate = useNavigate();

    const [values, setValues] = useState({
        tipo: '',
        tipoSaude: '',
        descricao: '',
        local: '',
        dataInicial: '',
        dataFinal: '',
        horaInicial: '',
        horaFinal: '',
    });

    if (tipoUsuario !== 'ADMIN') {
        return <p>Você não tem permissão para cadastrar serviços.</p>;
    }

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const usuarioId = localStorage.getItem('usuarioId');
            const servicoPayload = {
                tipo: values.tipo,
                tipoSaude: values.tipoSaude,
                descricao: values.descricao,
                local: values.local,
                dataInicial: values.dataInicial,
                dataFinal: values.dataFinal,
                horaInicial: values.horaInicial,
                horaFinal: values.horaFinal,
            };
            const response = await fetch(`http://localhost:8080/servicos/novoServico?usuarioId=${usuarioId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(servicoPayload)
            });
            if (response.ok) {
                alert('Serviço cadastrado com sucesso!');
                navigate('/');
            } else {
                const erro = await response.json();
                alert('Erro ao cadastrar serviço: ' + (erro.erro || 'Verifique os dados.'));
            }
        } catch (err) {
            console.error(err);
            alert('Erro ao cadastrar serviço. Tente novamente.');
        }
    }
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputServicos onChange={handleChange} values={values} />
            <SubmitBotao text={botaoText} className={styles.btnSalvar} />
        </form>
    );
}

export default CadastrarServicoForm;