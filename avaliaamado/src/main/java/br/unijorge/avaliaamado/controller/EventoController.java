package br.unijorge.avaliaamado.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @GetMapping("/{id}")
    public ResponseEntity<Evento> getEventoById(@PathVariable Long id) {
        Evento evento = eventoService.getById(id);
        return ResponseEntity.ok(evento);
    }

    @GetMapping("/nota")
    public ResponseEntity<List<Evento>> listarEventosPorNotaDesc() {
        List<Evento> eventos = eventoService.listarPorNotaDesc();
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/local")
    public ResponseEntity<List<Evento>> listarEventosPorLocal(@PathVariable String local) {
        List<Evento> eventos = eventoService.listarPorLocal(local);
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/data")
    public ResponseEntity<List<Evento>> listarEventosPorData(@PathVariable LocalDate data) {
        List<Evento> eventos = eventoService.listarPorData(data);
        return ResponseEntity.ok(eventos);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Evento>> getAllEventos() {
        return ResponseEntity.ok(eventoService.getAllEventos());
    }

    @PostMapping("/novoEvento")
    public ResponseEntity<Evento> criarEvento(@RequestBody Evento evento) {
        Evento novoEvento = eventoService.criarEvento(evento);
        return ResponseEntity.ok(novoEvento);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvento(@PathVariable Long id) {
        eventoService.deleteEvento(id);
        return ResponseEntity.noContent().build();
    }
}
