-- USUARIOS
INSERT INTO usuario (nome, email, senha) VALUES 
('Alice Souza', 'alice@unijorge.edu.br', 'senha123'),
('Bruno Lima', 'bruno@unijorge.edu.br', 'abc123'),
('Carla Mendes', 'carla@unijorge.edu.br', 'qwerty'),
('Diego Santos', 'diego@unijorge.edu.br', 'pass456');

-- EVENTOS
INSERT INTO evento (nome, nota, local, data_inicial, data_final, hora_inicial, hora_final, descricao) VALUES 
('Palestra sobre Direitos LGBTQIA+', 4.8, 'Auditorio Principal', '2023-05-15', '2023-05-15', '10:00:00', '12:00:00', 'Palestra sobre direitos e cidadania LGBTQIA+ na sociedade e no ambiente academico.'),
('Oficina de Expressao e Cultura Queer', 4.6, 'Sala de Metodologias Ageis', '2023-08-22', '2023-08-22', '14:00:00', '17:00:00', 'Oficina artistica e cultural voltada para a expressao da diversidade.'),
('Roda de Conversa: Vivencias LGBTQIA+', NULL, 'Sala 101', '2025-06-10', '2025-06-10', '16:00:00', '18:00:00', 'Espaço de escuta e compartilhamento de experiencias dentro do campus.'),
('Festival Diversidade na UniJorge', NULL, 'Recepcao', '2025-11-25', '2025-11-25', '09:00:00', '18:00:00', 'Festival com apresentacoes artisticas, culturais e stands de apoio a diversidade.');

-- SERVICOS
INSERT INTO servico (tipo, tipo_saude, descricao, local, nota, data_inicial, data_final, hora_inicial, hora_final)
VALUES ('JURIDICO', NULL, 'Assessoria juridica gratuita para estudantes LGBTQIA+ sobre nome social, retificacao de documentos e direitos civis.', 'Sala de Apoio Juridico', 4.9, '2023-02-01', '2023-12-15', '09:00:00', '17:00:00');

INSERT INTO servico (tipo, tipo_saude, descricao, local, nota, data_inicial, data_final, hora_inicial, hora_final)
VALUES ('EDUCACAO', NULL, 'Aulas de ingles inclusivas com foco em intercambio para pessoas LGBTQIA+', 'Sala de Idiomas', NULL, '2025-02-01', '2025-12-15', '10:00:00', '16:00:00');

INSERT INTO servico (tipo, tipo_saude, descricao, local, nota, data_inicial, data_final, hora_inicial, hora_final)
VALUES ('SAUDE', 'PSICOLOGIA', 'Atendimento psicologico para estudantes LGBTQIA+, oferecendo acolhimento e suporte emocional.', 'Clinica Escola de Psicologia', 4.7, '2023-03-01', '2023-12-15', '08:00:00', '16:00:00');

INSERT INTO servico (tipo, tipo_saude, descricao, local, nota, data_inicial, data_final, hora_inicial, hora_final)
VALUES ('COMUNICACAO', NULL, 'Consultoria em marketing digital para projetos LGBTQIA+ na universidade.', 'Sala de Comunicacao', NULL, '2025-04-01', '2025-12-15', '09:00:00', '17:00:00');

-- AVALIACAO EVENTO 1
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Excelente conteúdo, muito esclarecedor!', 5, false, 1, 1, NULL),
('A palestra foi muito boa, mas o tempo poderia ser maior.', 4, true, 2, 1, NULL);

-- AVALIACAO EVENTO 2
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Oficina maravilhosa, me senti muito acolhida!', 5, false, 3, 2, NULL),
('Faltou materiais, mas foi ótimo no geral.', 4, true, 4, 2, NULL);

-- AVALIACAO SERVICO 1
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('Me ajudaram com todo o processo de alteração do nome social.', 5, false, 2, NULL, 1),
('Atendimento muito humano e profissional.', 5, true, 3, NULL, 1);

-- AVALIACAO SERVICO 2
INSERT INTO avaliacao (descricao, nota, is_anonimo, id_user, id_evento, id_servico) VALUES 
('A psicóloga foi incrível, me ajudou muito a enfrentar meus desafios.', 5, false, 1, NULL, 3),
('Me senti seguro e acolhido durante as sessões.', 4, true, 4, NULL, 3);
