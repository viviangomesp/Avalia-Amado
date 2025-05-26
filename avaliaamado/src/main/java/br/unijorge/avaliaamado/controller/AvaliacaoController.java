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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService avaliacaoService;

    @Autowired
    private EventoService eventoService;

    @Autowired
    private ServicoService servicoService;

    @GetMapping("/all")
    public ResponseEntity<List<Avaliacao>> getAllAvaliacoes() {
        return ResponseEntity.ok(avaliacaoService.getAllAvaliacoes());
    }
    

}
