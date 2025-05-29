package br.unijorge.avaliaamado.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.service.ServicoService;

@RestController
@RequestMapping("/servicos")
public class ServicoController {

    @Autowired
    private ServicoService servicoService;

    @GetMapping("/all") //Lista todos os serviços existentes
    public ResponseEntity<List<Servico>> getAllServicos() {
        return ResponseEntity.ok(servicoService.getAllServicos());
    }

    @GetMapping("/porTipo") //Lista serviços por tipo
    public ResponseEntity<List<Servico>> listarServicoPorTipo(@RequestParam TipoServico tipo) {
        List<Servico> servicos = servicoService.buscarServicoPorTipo(tipo);
        return ResponseEntity.ok(servicos);
    }

    @GetMapping("/porLocal/{local}") // Lista serviços por local
    public ResponseEntity<List<Servico>> listarServicoPorLocal(@PathVariable String local) {
        List<Servico> servicos = servicoService.listarPorLocal(local);
        return ResponseEntity.ok(servicos);
    }

    @GetMapping("/notaMediaDesc") 
    public ResponseEntity<List<Servico>> listarServicosPorMediaNotaDesc() {
        List<Servico> servicos = servicoService.listarPorNotaDesc();
        return ResponseEntity.ok(servicos);
    }

    @PostMapping("/novoServico") // Cria um novo serviço TODO: SOMENTE ADMINISTRADOR PODE CRIAR SERVIÇO
    public ResponseEntity<?> criarServico(@RequestBody Servico servico, @RequestParam Long usuarioId) {
        try {
            Servico novoServico = servicoService.criarServico(servico, usuarioId);
            return ResponseEntity.ok(novoServico);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

    @PutMapping("/editarServico/{id}") // Edita um serviço existente SOMENTE ADMINISTRADOR PODE EDITAR SERVIÇO
    public ResponseEntity<Servico> editarServico(@PathVariable long id, @RequestBody Servico servico) {
        Servico servicoEditado = servicoService.editarServico(id, servico);
        return ResponseEntity.ok(servicoEditado);
    }

    @DeleteMapping("/delete/{id}") // Exclui um serviço por seu ID
    public ResponseEntity<Void> deleteServico(@PathVariable long id) {
        servicoService.deleteServico(id);
        return ResponseEntity.noContent().build();
    }
}
