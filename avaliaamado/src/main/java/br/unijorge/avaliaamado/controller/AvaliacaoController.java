package br.unijorge.avaliaamado.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.unijorge.avaliaamado.model.Avaliacao;
import br.unijorge.avaliaamado.service.AvaliacaoService;
import br.unijorge.avaliaamado.service.EventoService;
import br.unijorge.avaliaamado.service.ServicoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService avaliacaoService;

    @Autowired
    private EventoService eventoService;

    @Autowired
    private ServicoService servicoService;

    @GetMapping("/{id}") //Lista uma avaliação por seu ID
    public ResponseEntity<Avaliacao> getAvaliacao(@PathVariable Long id) {
        Avaliacao avaliacao = avaliacaoService.getAvaliacao(id);
        return ResponseEntity.ok(avaliacao);
    }

    @GetMapping("/all") //Lista todas as avaliações
    public ResponseEntity<List<Avaliacao>> getAllAvaliacoes() {
        return ResponseEntity.ok(avaliacaoService.getAllAvaliacoes());
    }
    
    @GetMapping("/evento/{eventoId}") //Lista avaliações por ID do evento
    public ResponseEntity<List<Avaliacao>> getAvaliacoesByEventoId(@PathVariable Long eventoId) {
        return ResponseEntity.ok(avaliacaoService.getAvaliacoesPorEvento(eventoId));
    }
    
    @GetMapping("/servico/{servicoId}") //Lista avaliações por ID do serviço
    public ResponseEntity<List<Avaliacao>> getAvaliacoesByServicoId(@PathVariable Long servicoId) {
        return ResponseEntity.ok(avaliacaoService.getAvaliacoesPorServico(servicoId));
    }

    @GetMapping("/usuario/{usuarioId}") //Lista todas as avaliações do usuário por seu ID
    public ResponseEntity<List<Avaliacao>> getAvaliacoesByUsuarioId(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(avaliacaoService.getAvaliacoesPorUsuario(usuarioId));
    }

    @PostMapping("/servico/{servicoId}/novaAvaliacao") //Cria avaliação de um serviço
    public ResponseEntity<Avaliacao> criarAvaliacaoServico(@RequestParam Long servicoId, @RequestParam Long usuarioId, @RequestBody Avaliacao avaliacao) {
        servicoService.getById(servicoId);
        Avaliacao novaAvaliacao = avaliacaoService.criarAvaliacaoServico(servicoId, usuarioId, avaliacao);
        return ResponseEntity.ok(novaAvaliacao);
    }

    @PostMapping("/evento/{eventoId}/novaAvaliacao") // Cria avaliação de um evento
    public ResponseEntity<Avaliacao> criarAvaliacaoEvento(@RequestParam Long eventoId, @RequestParam Long usuarioId, @RequestBody Avaliacao avaliacao) {
        eventoService.getById(eventoId);
        Avaliacao novaAvaliacao = avaliacaoService.criarAvaliacaoEvento(eventoId, usuarioId, avaliacao);
        return ResponseEntity.ok(novaAvaliacao);
    }

    @DeleteMapping("/delete/{id}") //Deletar avaliação por ID
    public ResponseEntity<Void> deleteAvaliacao(@PathVariable Long id) {
        avaliacaoService.deleteAvaliacao(id);
        return ResponseEntity.noContent().build();
    }

}
