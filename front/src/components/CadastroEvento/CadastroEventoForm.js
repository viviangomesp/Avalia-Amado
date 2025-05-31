import { useState } from 'react';
import SubmitBotao from '../form/SubmitBotao';
import InputEventos from '../form/InputEventos';
import styles from './CadastroEventoForm.module.css';

function CadastroEventoForm({ botaoText }) {
    // Estado inicial dos componentes
    const [values, setValues] = useState({
        nome_evento: '',
        data: '',
        hora: '',
        descricao: ''
    });
    //guarda as mudanças do usuario
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    //lida com as mudanças do formulário
    function handleSubmit(e) {
        e.preventDefault();
        //tratar dados
    }

    return (
        <form className={styles.input_group} onSubmit={handleSubmit}>
            <InputEventos onChange={handleChange} values={values} />
            <SubmitBotao text={botaoText} className ={styles.btnSalvar} />
        </form>
    );
}

export default CadastroEventoForm;