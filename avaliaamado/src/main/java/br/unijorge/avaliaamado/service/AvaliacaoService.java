package br.unijorge.avaliaamado.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.model.Avaliacao;
import br.unijorge.avaliaamado.model.Evento;
import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.repository.AvaliacaoRepository;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private EventoService eventoService;

    @Autowired
    private ServicoService servicoService;

    public Avaliacao criarAvaliacaoEvento(Long eventoId, Long usuarioId, Avaliacao avaliacao) {
        Evento evento = eventoService.getById(eventoId);

        if (evento.getDataFinal() != null) {
            if (evento.getDataFinal().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o evento ser realizado");
            }
        } else {
            if (evento.getDataInicial().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o evento ser realizado");
            }
        }

        if (avaliacaoRepository.existsByEventoIdAndUsuarioId(eventoId, usuarioId)) {
            throw new RuntimeException("Usuário já avaliou este evento");
        }

        return avaliacaoRepository.save(avaliacao);
    }

    public Avaliacao criarAvaliacaoServico(Long servicoId, Long usuarioId, Avaliacao avaliacao) {
        Servico servico = servicoService.getById(servicoId);

        if (servico.getDataFinal() != null) {
            if (servico.getDataFinal().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o serviço ser realizado");
            }
        } else {
            if (servico.getDataInicial().isAfter(LocalDate.now())) {
                throw new RuntimeException("Avaliação só pode ser feita após o serviço ser realizado");
            }
        }

        if (avaliacaoRepository.existsByServicoIdAndUsuarioId(servicoId, usuarioId)) {
            throw new RuntimeException("Usuário já avaliou este serviço");
        }

        return avaliacaoRepository.save(avaliacao);
    }

    public void deleteAvaliacao(Long id) {
        if (!avaliacaoRepository.existsById(id)) {
            throw new RuntimeException("Avaliação não encontrada");
        }
        avaliacaoRepository.deleteById(id);
    }

    public List<Avaliacao> getAllAvaliacoes() {
        return avaliacaoRepository.findAll();    
    }

    public Avaliacao getAvaliacao(long id) {
        return avaliacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação não encontrada"));
    }

    public List<Avaliacao> getAvaliacoesPorEvento(long eventoId) {
        return avaliacaoRepository.findByEventoId(eventoId);
    }

    public List<Avaliacao> getAvaliacoesPorServico(long servicoId) {
        return avaliacaoRepository.findByServicoId(servicoId);
    }

    public List<Avaliacao> getAvaliacoesPorUsuario(long usuarioId) {
        return avaliacaoRepository.findByUsuarioId(usuarioId);
    }

    public List<Avaliacao> getAvaliacoesPorNota(int nota) {
        return avaliacaoRepository.findByNotaGreaterThanEqual(nota);
    }
    
}
