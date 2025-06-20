-- USUARIOS
INSERT INTO usuario (nome, email, senha, role) VALUES 
('Alice Souza', 'alice@unijorge.edu.br', 'senha123',''),
('Bruno Lima', 'bruno@unijorge.edu.br', 'abc123',''),
('Carla Mendes', 'carla@unijorge.edu.br', 'qwerty',''),
('Diego Santos', 'diego@unijorge.edu.br', 'pass456',''),
('Administrador', 'admin@unijorge.edu.br','admin','ADMIN'),
('Eduarda Silva', 'eduarda@unijorge.edu.br', 'senhaedu',''),
('Felipe Costa', 'felipe@unijorge.edu.br', 'senhafelipe',''),
('Gabriela Rocha', 'gabriela@unijorge.edu.br', 'gabri123',''),
('Henrique Alves', 'henrique@unijorge.edu.br', 'henri456',''),
('Isabela Torres', 'isabela@unijorge.edu.br', 'isa789','');

-- EVENTOS
INSERT INTO evento (nome, nota, local, data_inicial, data_final, hora_inicial, hora_final, descricao) VALUES 
('Palestra sobre Direitos LGBTQIA+', 4.8, 'Auditorio Principal', '2023-05-15', '2023-05-15', '10:00:00', '12:00:00', 'Palestra sobre direitos e cidadania LGBTQIA+ na sociedade e no ambiente academico.'),
('Oficina de Expressao e Cultura Queer', 4.6, 'Sala de Metodologias Ageis', '2023-08-22', '2023-08-22', '14:00:00', '17:00:00', 'Oficina artistica e cultural voltada para a expressao da diversidade.'),
('Roda de Conversa: Vivencias LGBTQIA+', 5.0, 'Sala 101', '2025-06-02', '2025-06-03', '16:00:00', '18:00:00', 'Espaço de escuta e compartilhamento de experiencias dentro do campus.'),
('Festival Diversidade na UniJorge', NULL, 'Recepcao', '2025-11-25', '2025-11-25', '09:00:00', '18:00:00', 'Festival com apresentacoes artisticas, culturais e stands de apoio a diversidade.'),
('Workshop de Inclusão Digital', 3.5, 'Laboratório 2', '2024-09-05', '2024-09-05', '13:00:00', '16:00:00', 'Capacitação em ferramentas digitais para inclusão.'),
('Mesa Redonda: Saúde Mental', 5.0, 'Sala 202', '2024-10-20', '2024-10-20', '15:00:00', '17:00:00', 'Discussão sobre saúde mental na comunidade LGBTQIA+.'),
('Oficina de Redação Inclusiva', NULL, 'Sala 303', '2025-08-10', '2025-08-10', '09:00:00', '12:00:00', 'Oficina de escrita criativa com foco em inclusão e diversidade.'),
('Encontro de Empreendedorismo LGBTQIA+', NULL, 'Sala 404', '2025-09-15', '2025-09-15', '10:00:00', '13:00:00', 'Espaço para troca de ideias e networking entre empreendedores LGBTQIA+.');


-- SERVIÇOS 
INSERT INTO servico (tipo, tipo_saude, descricao, local, nota, data_inicial, data_final, hora_inicial, hora_final) VALUES 
('JURIDICO', NULL, 'Assessoria juridica gratuita para estudantes LGBTQIA+ sobre nome social, retificacao de documentos e direitos civis.', 'Sala de Apoio Juridico', 4.9, '2023-02-01', '2023-12-15', '09:00:00', '17:00:00'),
('EDUCACAO', NULL, 'Aulas de ingles inclusivas com foco em intercambio para pessoas LGBTQIA+', 'Sala de Idiomas', NULL, '2025-02-01', '2025-12-15', '10:00:00', '16:00:00'),
('SAUDE', 'PSICOLOGIA', 'Atendimento psicologico para estudantes LGBTQIA+, oferecendo acolhimento e suporte emocional.', 'Clinica Escola de Psicologia', 4.7, '2023-03-01', '2023-12-15', '08:00:00', '16:00:00'),
('COMUNICACAO', NULL, 'Consultoria em marketing digital para projetos LGBTQIA+ na universidade.', 'Sala de Comunicacao', NULL, '2025-04-01', '2025-12-15', '09:00:00', '17:00:00'),
('SAUDE', 'ENFERMAGEM', 'Atendimento de enfermagem para prevenção de ISTs.', 'Posto de Saúde', NULL, '2024-01-10', '2024-12-20', '08:00:00', '14:00:00'),
('CONTABILIDADE', NULL, 'Orientação contábil para estudantes que empreendem projetos inclusivos.', 'Sala 303', 4.6, '2024-02-01', '2024-11-30', '09:00:00', '12:00:00');

-- AVALIACAO EVENTO 1
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Excelente conteúdo, muito esclarecedor!', 5, false, 1, 1, NULL),
('A palestra foi muito boa, mas o tempo poderia ser maior.', 4, true, 2, 1, NULL),
('Gostei muito da abordagem dos palestrantes.', 5, false, 3, 1, NULL),
('Foi esclarecedor e trouxe reflexões importantes.', 4, true, 6, 1, NULL);

-- AVALIACAO EVENTO 2
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Oficina maravilhosa, me senti muito acolhida!', 5, false, 3, 2, NULL),
('Faltou materiais, mas foi ótimo no geral.', 4, true, 4, 2, NULL),
('Aprendi novas técnicas de expressão.', 5, false, 7, 2, NULL),
('Momento único de criatividade e expressão.', 5, true, 8, 2, NULL);

-- AVALIACAO EVENTO 3
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Muito importante esse espaço de fala.', 5, false, 6, 3, NULL),
('Me emocionei com os relatos compartilhados.', 5, true, 9, 3, NULL);

-- AVALIACAO EVENTO 4
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Workshop bem organizado.', 4, false, 8, 5, NULL),
('Poderia ter mais tempo para dúvidas.', 3, true, 1, 5, NULL);

-- AVALIACAO EVENTO 5
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Discussão muito relevante.', 5, false, 9, 6, NULL),
('A abordagem foi acolhedora e clara.', 5, true, 4, 6, NULL);

-- AVALIACAO SERVICO 1 - JURIDICO
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Me ajudaram com todo o processo de alteração do nome social.', 5, false, 2, NULL, 1),
('Atendimento muito humano e profissional.', 5, true, 3, NULL, 1),
('Equipe prestativa e eficiente.', 5, true, 6, NULL, 1);

-- AVALIACAO SERVICO 2 - EDUCACAO (ingles)
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Aulas muito boas, professor atencioso.', 4, false, 7, NULL, 2),
('Me sinto mais preparado para o intercâmbio.', 5, true, 8, NULL, 2);

-- AVALIACAO SERVICO 3 - SAUDE (PSICOLOGIA)
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('A psicóloga foi incrível, me ajudou muito a enfrentar meus desafios.', 5, false, 1, NULL, 3),
('Me senti seguro e acolhido durante as sessões.', 4, true, 4, NULL, 3),
('Um espaço seguro e de confiança.', 5, true, 9, NULL, 3);

-- AVALIACAO SERVICO 4 - COMUNICACAO
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Me ajudaram a criar uma campanha de impacto.', 5, false, 10, NULL, 4),
('Equipe bem preparada, adorei o suporte!', 5, true, 2, NULL, 4);

-- AVALIACAO SERVICO 5 - SAUDE (ENFERMAGEM)
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Enfermeira muito atenciosa.', 5, false, 6, NULL, 5),
('Boa orientação e atendimento rápido.', 4, true, 7, NULL, 5);

-- AVALIACAO SERVICO 6 - EDUCACAO (redação)
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Oficina de redação me ajudou a passar no vestibular.', 5, false, 8, NULL, 6),
('Professora super didática.', 5, true, 9, NULL, 6);
