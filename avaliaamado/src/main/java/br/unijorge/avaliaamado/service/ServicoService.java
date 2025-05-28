package br.unijorge.avaliaamado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.repository.ServicoRepository;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public Servico criarServico(Servico servico){//SOMENTE ADMINISTRADOR PODE CRIAR SERVIÇO
        return servicoRepository.save(servico);
    }

    public Servico editarServico(long id, Servico servico) { // Método para editar o serviço
        Servico servicoExistente = servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
        
        servicoExistente.setTipo(servico.getTipo());
        servicoExistente.setTipoSaude(servico.getTipoSaude());
        servicoExistente.setDescricao(servico.getDescricao());
        servicoExistente.setLocal(servico.getLocal());
        servicoExistente.setDataInicial(servico.getDataInicial());
        servicoExistente.setDataFinal(servico.getDataFinal());
        servicoExistente.setHoraInicial(servico.getHoraInicial());
        servicoExistente.setHoraFinal(servico.getHoraFinal());
        
        return servicoRepository.save(servicoExistente);

    }
    
    public void deleteServico(long id) { // Método para deletar o serviço
        servicoRepository.deleteById(id);
    }

    public Servico buscarServicoPorId(long id) { // Método para buscar o serviço por ID
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    public List<Servico> buscarPorNotaDesc() { // Método para listar serviços por nota decrescente
        return servicoRepository.findAllByOrderByNotaDesc();
    }

    public List<Servico> getAllServicos() { // Método para listar todos os serviços
        return servicoRepository.findAll();
    }

    public Servico getById(long id) {
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    public Servico buscarServicoPorTipo(TipoServico tipo) { // Método para buscar o serviço por tipo
        return servicoRepository.findByTipo(tipo);
    }

    public Servico buscarServicoPorLocal(String local) { // Método para buscar o serviço por local
        return servicoRepository.findByLocal(local);
    }
}