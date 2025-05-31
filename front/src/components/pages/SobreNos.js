import React, { useEffect, useState } from 'react';
import styles from './SobreNos.module.css';

function SobreNos() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`${styles.container} ${fadeIn ? styles.fadeIn : ''}`}>
            <h1>Sobre nós</h1>
            <p>
                <strong>Avalia AMADO</strong> é uma plataforma criada para dar voz à comunidade LGBTQIAP+ que participa dos eventos e serviços do Núcleo AMADO. 
                Aqui, você pode avaliar sua experiência em atendimentos, oficinas, palestras e outros momentos promovidos pelo projeto. 
                A partir dos seus feedbacks, buscamos melhorar a qualidade do acolhimento e fortalecer o impacto das nossas ações.
            </p>

            <h2>O que é o Núcleo Amado?</h2>
            <p>
                Criado de forma embrionária em 2020 pelo curso de Direito da UNIJORGE, com a participação do curso de Psicologia, 
                o <strong>Núcleo AMADO – Núcleo de Apoio à Comunidade LGBTQIAP+</strong> oferece acolhimento, serviços e inclusão para pessoas da comunidade.
            </p>

            <h2>Serviços Disponíveis</h2>
            <ul className = {styles.ul}>
                <li>
                    <strong>Jurídico</strong><br />
                    Atendimentos nas áreas cível, trabalhista e penal (vítimas de transfobia e violência doméstica).
                </li>
                <li>
                    <strong>Contabilidade</strong><br />
                    Consultoria para criação e regularização de MEI.
                </li>
                <li>
                    <strong>Educação</strong><br />
                    Aulas preparatórias para o Enem e Supletivos.
                </li>
                <li>
                    <strong>Relações Internacionais</strong><br />
                    Relacionamento com entidades internacionais de fomento e defesa da comunidade LGBTQIAP+.
                </li>
                <li>
                    <strong>Comunicação</strong><br />
                    Criação de publicações sobre o AMADO e temas de interesse.
                </li>
                <li>
                    <strong>Saúde</strong>
                    <ul className={styles.ul}>
                        <li>
                            <strong>Psicologia</strong> – Atendimentos psicológicos de emergência, 
                            bem como terapias individuais e coletivas e atendimentos específicos para laudo de transição.
                        </li>
                        <li>
                            <strong>Fonoaudiologia</strong> – Tratamento para construção da voz para pessoas trans.
                        </li>
                        <li>
                            <strong>Enfermagem</strong> – Triagem e atendimento de saúde em geral, aplicação de injetáveis mediante 
                            receita médica e pré-natal para homens trans.
                        </li>
                        <li>
                            <strong>Nutrição</strong> – Diagnóstico, acompanhamento, orientação e monitoramento nutricional e planejamento alimentar.
                        </li>
                        <li>
                            <strong>Fisioterapia</strong> – Atendimento para pós-operatório de redesignação sexual (mamas e genitália) e reeducação postural.
                        </li>
                    </ul>
                </li>
            </ul>
            <p className = {styles.em} >
                <em>
                    *Esses serviços são realizados no Instituto de Saúde da Unijorge, no campus Paralela, que conta com ampla estrutura com consultórios, 
                    ginásio, piscina terapêutica e acessibilidade.
                </em>
            </p>
        </div>
    );
}

export default SobreNos;