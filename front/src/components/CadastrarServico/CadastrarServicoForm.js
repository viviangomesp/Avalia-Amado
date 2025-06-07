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
        const usuarioId = localStorage.getItem('usuarioId');
    
        // Validação dos campos obrigatórios
        if (
            !values.tipo ||
            !values.descricao ||
            !values.local ||
            (values.tipo === "SAUDE" && !values.tipoSaude)
        ) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }
        // Monta o payload para o backend
        const servicoPayload = {
            tipo: values.tipo,
            descricao: values.descricao,
            local: values.local,
        };
        if (values.tipo === "SAUDE") servicoPayload.tipoSaude = values.tipoSaude;
    
        try {
            const response = await fetch(`http://localhost:8080/servicos/novoServico?usuarioId=${usuarioId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(servicoPayload)
            });
            if (response.ok) {
                alert('Serviço cadastrado com sucesso!');
                navigate('/');
            } else {
              
                alert('Erro ao cadastrar serviço: Verifique os dados e tente novamente. ');
            }
        } catch {
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