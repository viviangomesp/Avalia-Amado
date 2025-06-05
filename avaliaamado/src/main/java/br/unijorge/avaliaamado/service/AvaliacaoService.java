package br.unijorge.avaliaamado.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.DTO.AvaliacaoResponse;
import br.unijorge.avaliaamado.model.Avaliacao;
import br.unijorge.avaliaamado.model.Evento;
import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.model.Usuario;
import br.unijorge.avaliaamado.repository.AvaliacaoRepository;
import br.unijorge.avaliaamado.repository.UsuarioRepository;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private EventoService eventoService;

    @Autowired
    private ServicoService servicoService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Avaliacao criarAvaliacaoEvento(Long eventoId, Long usuarioId, Avaliacao avaliacao) {
        Evento evento = eventoService.getById(eventoId);
        Usuario usuario = usuarioService.getById(usuarioId);

        if (evento == null) {// Verifica se o evento existe
            throw new RuntimeException("Evento não encontrado");
        }

        if (evento.getDataFinal() != null) {// Verifica se há data final
            if (evento.getDataFinal().isAfter(LocalDate.now())) {// Compara a data final com a data atual
                throw new RuntimeException("Avaliação só pode ser feita após o evento ser realizado");
            }
        } else {
            if (evento.getDataInicial().isAfter(LocalDate.now())) {// Compara a data inicial com a data atual
                throw new RuntimeException("Avaliação só pode ser feita após o evento ser realizado");
            }
        }

        if (avaliacaoRepository.existsByEvento_IdAndUsuario_Id(eventoId, usuarioId)) {// Verifica se o usuário já avaliou o evento
            throw new RuntimeException("Usuário já avaliou este evento");
        }

        // Associando para garantir a integridade referencial
        avaliacao.setEvento(evento);
        avaliacao.setUsuario(usuario);

        return avaliacaoRepository.save(avaliacao);
    }

    public Avaliacao criarAvaliacaoServico(Long servicoId, Long usuarioId, Avaliacao avaliacao) {
        Servico servico = servicoService.getById(servicoId);
        Usuario usuario = usuarioService.getById(usuarioId);

        if (servico == null) {
            throw new RuntimeException("Serviço não encontrado");
        }

        if (servico.getDataFinal() != null) {
            if (servico.getDataFinal().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o serviço ser realizado");
            }
        } else {
            if (servico.getDataInicial().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o serviço ser realizado");
            }
        }

        if (avaliacaoRepository.existsByServico_IdAndUsuario_Id(servicoId, usuarioId)) {
            throw new RuntimeException("Usuário já avaliou este serviço");
        }

        avaliacao.setServico(servico);
        avaliacao.setUsuario(usuario);

        return avaliacaoRepository.save(avaliacao);
    }

    public void deleteAvaliacao(Long id) {
        if (!avaliacaoRepository.existsById(id)) {
            throw new RuntimeException("Avaliação não encontrada");
        }
        avaliacaoRepository.deleteById(id);
    }

    public List<Avaliacao> getAllAvaliacoes(Long usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        String role = usuario.getRole();

        if (role == null)
            throw new RuntimeException("Usuário não possui função atribuída. Acesso Negado.");

        if (!role.equalsIgnoreCase("ADMIN")) { // Verifica se o usuário é administrador
            throw new RuntimeException("Apenas administradores podem listar todas as avaliações. Acesso Negado.");
        }
        return avaliacaoRepository.findAll();
    }

    public List<AvaliacaoResponse> getAvaliacaoPorEvento (long eventoId) {
        List<Avaliacao> avaliacoes = getAvaliacoesPorEvento(eventoId);
        return avaliacoes.stream()
                .map(AvaliacaoResponse::new)
                .collect(Collectors.toList());
    }

    public List<AvaliacaoResponse> getAvaliacaoPorServico (long servicoId) {
        List<Avaliacao> avaliacoes = getAvaliacoesPorServico(servicoId);
        return avaliacoes.stream()
                .map(AvaliacaoResponse::new)
                .collect(Collectors.toList());
    }

    public Avaliacao getAvaliacao(long id) {
        return avaliacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação não encontrada"));
    }

    public List<Avaliacao> getAvaliacoesPorEvento(long eventoId) {
        return avaliacaoRepository.findByEvento_Id(eventoId);
    }

    public List<Avaliacao> getAvaliacoesPorServico(long servicoId) {
        return avaliacaoRepository.findByServico_Id(servicoId);
    }

    public List<Avaliacao> getAvaliacoesPorUsuario(long usuarioId) {
        return avaliacaoRepository.findByUsuario_Id(usuarioId);
    }

    public List<Avaliacao> getAvaliacoesPorNota(Double nota) {
        return avaliacaoRepository.findByNotaGreaterThanEqual(nota);
    }

}
