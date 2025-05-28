package br.unijorge.avaliaamado.controller;

import java.util.List;

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
    public ResponseEntity<Servico> listarServicoPorTipo(@RequestParam TipoServico tipo){
        Servico servico = servicoService.buscarServicoPorTipo(tipo);
        return ResponseEntity.ok(servico);
    }

    @GetMapping("/porLocal") // Lista serviços por local
    public ResponseEntity<Servico> listarServicoPorLocal(@RequestParam String local) {
        Servico servico = servicoService.buscarServicoPorLocal(local);
        return ResponseEntity.ok(servico);
    }

    @GetMapping("/porNota") // Lista serviços por nota em ordem decrescente
    public ResponseEntity<List<Servico>> listarServicosPorNotaDesc() {
        List<Servico> servicos = servicoService.buscarPorNotaDesc();
        return ResponseEntity.ok(servicos);
    }

    @GetMapping("/notaMedia/{id}") // Obtém a média das notas de um serviço por ID
    public ResponseEntity<Double> obterMediaNota(@PathVariable Long id) {
        Double mediaNota = servicoService.obterNotaMediaServico(id);
        return ResponseEntity.ok(mediaNota);
    }

    @PostMapping("/novoServico") // Cria um novo serviço TODO: SOMENTE ADMINISTRADOR PODE CRIAR SERVIÇO
    public ResponseEntity<Servico> criarServico (@RequestBody Servico servico){
        Servico novoServico = servicoService.criarServico(servico);
        return ResponseEntity.ok(novoServico);
    }

    @PutMapping("/editarServico") // Edita um serviço existente SOMENTE ADMINISTRADOR PODE EDITAR SERVIÇO
    public ResponseEntity<Servico> editarServico(@RequestParam long id, @RequestBody Servico servico) {
        Servico servicoEditado = servicoService.editarServico(id, servico);
        return ResponseEntity.ok(servicoEditado);
    }

    @DeleteMapping("/delete/{id}") // Exclui um serviço por seu ID
    public ResponseEntity<Void> deleteServico(@RequestParam long id) {
        servicoService.deleteServico(id);
        return ResponseEntity.noContent().build();
    }
}
