package br.unijorge.avaliaamado.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.unijorge.avaliaamado.model.Evento;
import br.unijorge.avaliaamado.service.EventoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping("/{id}") // Lista um evento por seu ID
    public ResponseEntity<Evento> getEventoById(@PathVariable Long id) {
        Evento evento = eventoService.getById(id);
        return ResponseEntity.ok(evento);
    }

    @GetMapping("/porLocal/{local}") // Lista eventos por local
    public ResponseEntity<List<Evento>> listarEventosPorLocal(@PathVariable String local) {
        List<Evento> eventos = eventoService.listarPorLocal(local);
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/porData/{data}") // Lista eventos por data
    public ResponseEntity<List<Evento>> listarEventosPorData(@PathVariable LocalDate data) {
        List<Evento> eventos = eventoService.listarPorData(data);
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/passado") // Lista eventos que já ocorreram
    public ResponseEntity<List<Evento>> listarEventosPorDataPassada() {
        List<Evento> eventos = eventoService.getEventosPorDataPassada(LocalDate.now());
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/futuro") // Lista eventos que ocorrerão no futuro
    public ResponseEntity<List<Evento>> listarEventosPorDataFutura() {
        List<Evento> eventos = eventoService.getEventosPorDataFutura(LocalDate.now());
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/all") // Lista todos os eventos existentes
    public ResponseEntity<List<Evento>> getAllEventos() {
        return ResponseEntity.ok(eventoService.getAllEventos());
    }

    @GetMapping("/notaMediaDesc") // Lista eventos por média de nota em ordem decrescente
    public ResponseEntity<List<Evento>> listarEventosPorMediaNotaDesc() {
        List<Evento> eventos = eventoService.listarPorNotaDesc();
        return ResponseEntity.ok(eventos);
    }

    @PostMapping("/novoEvento")
    public ResponseEntity<?> criarEvento(@RequestBody Evento evento, @RequestParam Long usuarioId) {
        try {
            Evento novoEvento = eventoService.criarEvento(evento, usuarioId);
            return ResponseEntity.ok(novoEvento);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

    @DeleteMapping("/delete/{id}") // Exclui um evento por seu ID
    public ResponseEntity<?> deleteEvento(@PathVariable Long id, @RequestParam Long usuarioId) {
        try {
            eventoService.deleteEvento(id, usuarioId);
            return ResponseEntity.ok(Map.of("mensagem", "Evento excluído com sucesso"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

}
